import "@contentlayer/utils/effect/Tracing/Enable";

import * as core from "@contentlayer/core";
import { fs } from "@contentlayer/utils";
import { pipe, T } from "@contentlayer/utils/effect";

const args = process.argv.slice(2);
const verbose = args.includes("--verbose");
const clearCache = args.includes("--clearCache");

const getArgValue = (flagLong, flagShort) => {
  const longIndex = args.indexOf(flagLong);
  if (longIndex !== -1 && args[longIndex + 1]) {
    return args[longIndex + 1];
  }

  const shortIndex = args.indexOf(flagShort);
  if (shortIndex !== -1 && args[shortIndex + 1]) {
    return args[shortIndex + 1];
  }

  return undefined;
};

const configPath = getArgValue("--config", "-c");

const buildEffect = pipe(
  T.gen(function* ($) {
    if (clearCache) {
      const cwd = yield* $(core.getCwd);
      const artifactsDir = core.ArtifactsDir.getDirPath({ cwd });
      yield* $(fs.rm(artifactsDir, { recursive: true, force: true }));
      yield* $(T.log("Cache cleared successfully"));
    }

    const config = yield* $(core.getConfig({ configPath }));

    if (!config.source.options.disableImportAliasWarning) {
      yield* $(T.fork(core.validateTsconfig));
    }

    const info = yield* $(core.generateDotpkg({ config, verbose }));
    yield* $(core.logGenerateInfo(info));
  }),
);

await core.runMain({
  tracingServiceName: "contentlayer-build-script",
  verbose: verbose || process.env.CL_DEBUG !== undefined,
})(buildEffect);
