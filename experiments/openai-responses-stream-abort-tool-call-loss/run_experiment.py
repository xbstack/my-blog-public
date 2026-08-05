from __future__ import annotations

import json
from pathlib import Path

from response_stream_state_lab import serializable_result


def main() -> None:
    root = Path(__file__).resolve().parent
    output_dir = root / "results"
    output_dir.mkdir(parents=True, exist_ok=True)
    result = serializable_result()
    output_path = output_dir / "verification.json"
    output_path.write_text(
        json.dumps(result, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps(result, ensure_ascii=False, indent=2))
    print(f"wrote {output_path}")


if __name__ == "__main__":
    main()
