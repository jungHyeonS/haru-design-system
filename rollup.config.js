import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts', // 진입점 파일
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'], // peerDependencies는 external로 처리
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: true,
      modules: false,
      minimize: true,
      sourceMap: true,
    }),
  ],
};
