import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';

const tailwindConfig = require('./tailwind.config.js');

import pkg from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ["react/jsx-runtime", ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      clean: true,
      tsconfig: "tsconfig-rollup.json",
      typescript: require("typescript"),
    }),
    postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        plugins: [tailwindcss(tailwindConfig)],
      }),
  ],
};
