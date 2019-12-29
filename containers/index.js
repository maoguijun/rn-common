/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:57:33
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-29 19:15:07
 * @FilePath: \demoRnc\screen\index.js
 */
import React, { Component } from "react";
import Home from "./home/container";
import Detail from "./detail";
import { NativeRouter, Route } from "react-router-native";
import MiniFooterBar from "../components/mini-footerbar";
class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={Home} />
                <Route path="/Detail" component={Detail} />
                <MiniFooterBar />
            </NativeRouter>
        );
    }
}

export default Routers;
