/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:51:47
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-30 11:35:08
 * @FilePath: \demoRnc\screen\home\index.js
 */
import React, { Component } from "react";
import { Container, Header, Button, Text } from "native-base";
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
            <Container style={styles.homeWrap}>
                <Text>首页</Text>
            </Container>
        );
    }
}

export default HomeScreen;
