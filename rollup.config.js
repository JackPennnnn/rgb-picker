import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
    input: 'src/index.ts', // 打包入口
    output: { // 打包出口
        file: './dist/index.js',
        format: 'es',
        name: pkg.name
    },
    plugins: [ // 打包插件
        resolve(), // 查找和打包node_modules中的第三方模块
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
        typescript() // 解析TypeScript
    ]
}
