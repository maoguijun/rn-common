/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:57:33
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-27 18:13:57
 * @FilePath: \demoRnc\screen\index.js
 */
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./home";
import Detail from "./detail";
const AppNavigator = createStackNavigator(
    {
        Home,
        Detail,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                display: "none", //隐藏 react-navigation 提供的header
            },
        },
    }
);

export default createAppContainer(AppNavigator);
