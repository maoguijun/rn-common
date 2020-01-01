/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:51:47
 * @LastEditors  : maoguijun
 * @LastEditTime : 2020-01-01 15:36:33
 * @FilePath: \demoRnc\screen\home\index.js
 */
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./index.styles";
import { connect } from "react-redux";
import { get, bindAll } from "lodash";
import { withRouter } from "react-router-native";

const mapState = state => ({
    ...get(state, "home"),
});
const mapDispatch = ({ home }) => ({
    ...home,
});
@withRouter
@connect(mapState, mapDispatch)
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // bindAll(this, ["goHome"]);
    }
    render() {
        return (
            <View style={styles.homeWrap}>
                <Text>首页</Text>
            </View>
        );
    }
}

export default HomeScreen;
