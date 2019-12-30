/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:57:33
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-30 11:50:13
 * @FilePath: \demoRnc\screen\index.js
 */
import React, { Component } from "react";
import Home from "./home/container";
import Search from "./search/container";
import {
    Container,
    Header,
    Button,
    Content,
    ActionSheet,
    Text,
} from "native-base";
import { NativeRouter, Route, Redirect } from "react-router-native";
import MiniFooterBar from "../components/mini-footerbar";

const routePath = {
    home: "/home",
    search: "/search",
    user: "/user",
};

class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <NativeRouter>
                <Container>
                    <Content>
                        <Redirect to={routePath.home} />
                        <Route
                            exact
                            path={routePath.home}
                            render={props => <Home {...props} />}
                        />
                        <Route
                            path={routePath.search}
                            render={props => <Search {...props} />}
                        />
                    </Content>
                    <MiniFooterBar />
                </Container>
            </NativeRouter>
        );
    }
}

export { Routers as default, routePath };
