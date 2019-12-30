/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:51:47
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-30 11:36:34
 * @FilePath: \demoRnc\screen\home\index.js
 */
import React, { Component } from "react";
import styles from "./index.styles";
import { connect } from "react-redux";
import { get, bindAll } from "lodash";
import { withRouter } from "react-router-native";
import { Container, Header, Button, Text } from "native-base";

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
            <Container style={styles.homeWrap}>
                <Text>搜索页</Text>
                <Button onPress={this.goHome}>
                    <Text>回到首页</Text>
                </Button>
            </Container>
        );
    }
}

export default Search;
