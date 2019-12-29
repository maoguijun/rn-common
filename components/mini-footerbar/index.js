/*
 * @Author: maoguijun
 * @Date: 2019-12-29 15:44:41
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-29 18:17:11
 * @FilePath: \demoRnc\components\mini-footerbar\index.js
 */
import React, { Component } from "react";
import { Container, Text, Footer, FooterTab, Button } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { withRouter } from "react-router-native";

@withRouter
class MiniFooterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical={true}>
                        <Icon name="home" />
                        <Text>首页</Text>
                    </Button>
                    <Button vertical={true}>
                        <Icon name="search1" />
                        <Text>诗词库</Text>
                    </Button>
                    <Button vertical={true}>
                        <Icon name="user" />
                        <Text>我</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default MiniFooterBar;
