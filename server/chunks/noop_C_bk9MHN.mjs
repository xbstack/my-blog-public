import { b as baseService, a as isESMImportedImage, v as verifyOptions } from './_astro_assets_cm5UI8r_.mjs';

const noopService = {
  ...baseService,
  propertiesToHash: ["src"],
  async validateOptions(options) {
    if (isESMImportedImage(options.src) && options.src.format === "svg") {
      options.format = "svg";
    } else {
      delete options.format;
    }
    verifyOptions(options);
    return options;
  },
  async transform(inputBuffer, transformOptions) {
    return {
      data: inputBuffer,
      format: transformOptions.format
    };
  }
};
var noop_default = noopService;

export { noop_default as default };
