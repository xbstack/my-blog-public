#!/usr/bin/env python3
"""Read-only Mac local model memory preflight. Estimates are NOT runtime guarantees."""
import argparse
import json
import platform
import subprocess
from pathlib import Path

MODEL_GIB = {"mlx-4bit": 13.6 * 1e9 / 1024**3,
             "mlx-5bit": 16.5 * 1e9 / 1024**3,
             "mlx-8bit": 25.5 * 1e9 / 1024**3}

def report(memory_gib, artifact_gib, reserve_gib):
    if memory_gib <= 0 or artifact_gib <= 0 or reserve_gib < 0:
        raise ValueError("Expected positive memory and model sizes, nonnegative reserve")
    residual = memory_gib - artifact_gib - reserve_gib
    return {"unified_memory_gib": round(memory_gib, 2),
            "estimated_artifact_gib": round(artifact_gib, 2),
            "non_model_reserve_gib": round(reserve_gib, 2),
            "residual_budget_gib": round(residual, 2),
            "status": "insufficient_for_assumed_reserve" if residual < 0 else "capacity_only_not_verified",
            "caveat": "Artifact plus reserve is only a planning check; no model load, KV-cache peak or inference benchmark was performed."}

def physical_gib():
    if platform.system() != "Darwin":
        raise SystemExit("Mac hardware probing requires macOS; use --memory-gib for scenario testing")
    output = subprocess.check_output(["sysctl", "-n", "hw.memsize"], text=True, timeout=10)
    return int(output.strip()) / (1024 ** 3)

def main():
    parser = argparse.ArgumentParser(description="LFM2.5 Mac quantized artifact preflight: estimates only")
    parser.add_argument("--variant", choices=MODEL_GIB, default="mlx-4bit")
    parser.add_argument("--memory-gib", type=float, help="Explicit total physical memory in GiB for scenarios")
    parser.add_argument("--reserve-gib", type=float, default=6.0,
                        help="Planning reserve for OS, runtime and cache, not a benchmark (default: 6 GiB)")
    parser.add_argument("--artifact-bytes", type=int, help="Override estimated artifact size using an actual on-disk file size")
    args = parser.parse_args()
    artifact = args.artifact_bytes / (1024**3) if args.artifact_bytes is not None else MODEL_GIB[args.variant]
    result = report(args.memory_gib if args.memory_gib is not None else physical_gib(),
                    artifact, args.reserve_gib)
    result["variant"] = args.variant
    result["device_detected"] = args.memory_gib is None
    print(json.dumps(result, ensure_ascii=False, indent=2))
if __name__ == "__main__":
    main()
