/*
 * @Author: maoguijun
 * @Date: 2019-12-27 11:36:21
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-28 03:16:34
 * @FilePath: \demoRnc\App.js
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from "react-native";

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import "react-native-gesture-handler";

import Screen from "./screen";

const App = () => {
    return (
        <>
            <StatusBar
                animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                hidden={false} //是否隐藏状态栏。
                backgroundColor={"#fff"} //状态栏的背景色
                translucent={false} //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                barStyle={"dark-content"} // enum('default', 'light-content', 'dark-content')
            />
            <Screen />
        </>
    );
};

export default App;
