/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:57:33
 * @LastEditors  : maoguijun
 * @LastEditTime : 2020-01-02 15:14:23
 * @FilePath: \demoRnc\screen\index.js
 */
import React, { Component } from "react";
import Home from "./home/container";
import Search from "./search/container";
import { View } from "react-native";
import { NativeRouter, Route, Redirect } from "react-router-native";
import MiniLayout from "../components/mini-layout";
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
                <MiniLayout>
                    {/* <Redirect to={routePath.home} />
                    <Route
                        exact
                        path={routePath.home}
                        render={props => <Home {...props} />}
                    />
                    <Route
                        path={routePath.search}
                        render={props => <Search {...props} />}
                    /> */}
                </MiniLayout>
            </NativeRouter>
        );
    }
}

export { Routers as default, routePath };
