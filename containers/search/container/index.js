/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:51:47
 * @LastEditors  : maoguijun
 * @LastEditTime : 2020-01-01 15:37:41
 * @FilePath: \demoRnc\screen\home\index.js
 */
import React, { Component } from "react";
import styles from "./index.styles";
import { connect } from "react-redux";
import { get, bindAll } from "lodash";
import { withRouter } from "react-router-native";
import { Button } from "@ant-design/react-native";
import { View, Text } from "react-native";

const mapState = state => ({
    ...get(state, "home"),
});
const mapDispatch = ({ home }) => ({
    ...home,
});
@withRouter
@connect(mapState, mapDispatch)
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        bindAll(this, ["goHome"]);
    }

    goHome() {
        const { history } = this.props;
        history.replace("/home");
    }
    render() {
        return (
            <View style={styles.searchWrap}>
                <Text>搜索页</Text>
                <Button onPress={this.goHome}>
                    <Text>回到首页</Text>
                </Button>
            </View>
        );
    }
}

export default Search;
