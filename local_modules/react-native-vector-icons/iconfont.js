/*
 * @Author: maoguijun
 * @Date: 2019-12-31 13:31:13
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-31 13:31:30
 * @FilePath: \demoRnc\local_modules\react-native-vector-icons\iconfont.js
 */

import createIconSet from "./lib/create-icon-set";
import glyphMap from "./glyphmaps/iconfont.json";

const iconSet = createIconSet(glyphMap, "iconfont", "iconfont.ttf");

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;
