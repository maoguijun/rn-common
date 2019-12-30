/*
 * @Author: maoguijun
 * @Date: 2019-12-27 11:36:21
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-30 11:59:53
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
    ],
};
