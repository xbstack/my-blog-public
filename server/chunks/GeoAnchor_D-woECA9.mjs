import { e as createAstro, c as createComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_CVKVJgiO.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.xbstack.com");
const $$GeoAnchor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GeoAnchor;
  const {
    summary,
    questions = [],
    entities = [],
    links = [],
    tldr = [],
    lang = "zh-CN"
  } = Astro2.props;
  const normalizedEntities = entities.map(
    (entity) => typeof entity === "string" ? { name: entity, type: "Thing" } : { type: "Thing", ...entity }
  );
  const geoPayload = {
    version: "xbstack-geo-v1",
    visibility: "machine-readable-only",
    lang,
    summary,
    tldr,
    questions,
    entities: normalizedEntities,
    links
  };
  const geoPayloadJson = JSON.stringify(geoPayload).replace(/</g, "\\u003c");
  return renderTemplate(_a || (_a = __template(['<script type="application/json" data-xbstack-geo-payload>', "<\/script>"])), unescapeHTML(geoPayloadJson));
}, "/Users/beijingchaoyang/MyWeb/blog/src/components/seo/GeoAnchor.astro", void 0);

export { $$GeoAnchor as $ };
