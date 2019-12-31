/*
 * @Author: maoguijun
 * @Date: 2019-12-30 13:51:28
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-31 11:11:20
 * @FilePath: \demoRnc\metro.config.js
 */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};
