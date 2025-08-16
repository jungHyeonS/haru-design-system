import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    PeerDepsExternalPlugin(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.app.json",
      declaration: true,
      declarationDir: "dist",
    }),
    postcss({
      extract: "index.css",
      modules: false,
      use: ["sass"],
      config: true,
      minimize: true,
      sourceMap: true,
    }),
  ],
  external: ["react", "react-dom"],
};
