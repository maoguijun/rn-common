/*
 * @Author: maoguijun
 * @Date: 2019-12-27 11:36:21
 * @LastEditors  : maoguijun
 * @LastEditTime : 2020-01-01 15:24:00
 * @FilePath: \demoRnc\babel.config.js
 */
module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: true,
            },
        ],
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-proposal-export-default-from",
        ["import", { libraryName: "@ant-design/react-native" }],
    ],
};
