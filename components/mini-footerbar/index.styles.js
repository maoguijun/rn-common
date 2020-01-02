/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:52:29
 * @LastEditors  : maoguijun
 * @LastEditTime : 2020-01-02 14:56:55
 * @FilePath: \demoRnc\screen\home\index.styles.js
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    footerTab: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        zIndex: 100,
    },
    tab: {
        padding: 10,
        width: "25%",
        textAlign: "center",
    },
    tabActive: {
        // backgroundColor: "#212C54",
    },
    icon: {
        fontSize: 24,
        textAlign: "center",
    },
    iconActive: {
        color: "#FFC026",
    },
    label: {
        fontSize: 10,
        textAlign: "center",
    },
    labelActive: {
        color: "#FFC026",
    },
});
