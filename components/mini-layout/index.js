/*
 * @Author: maoguijun
 * @Date: 2020-01-01 16:04:28
 * @LastEditors  : maoguijun
 * @LastEditTime : 2020-01-02 14:58:06
 * @FilePath: \demoRnc\components\mini-layout\index.js
 */
import React, { Component } from "react";
import { View, Con } from "react-native";
import MiniFooterBar from "../mini-footerbar";
import styles from "./index.styles";
/**
 *
 */
class MiniLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { children } = this.props;
        return (
            <View style={styles.layout}>
                <View style={styles.content}>{children}</View>
                <MiniFooterBar />
            </View>
        );
    }
}

export default MiniLayout;
