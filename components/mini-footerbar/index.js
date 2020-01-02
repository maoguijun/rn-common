/*
 * @Author: maoguijun
 * @Date: 2019-12-29 15:44:41
 * @LastEditors  : maoguijun
 * @LastEditTime : 2020-01-02 15:12:59
 * @FilePath: \demoRnc\components\mini-footerbar\index.js
 */
import React, { Component } from "react";
import { Text, View } from "react-native";
import { TabBar } from "@ant-design/react-native";
import Icon from "react-native-vector-icons/iconfont";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { get, bindAll } from "lodash";
import styles from "./index.styles";
import Home from "../../containers/home";
import Search from "../../containers/search";
const tabbarList = [
    {
        iconName: "mini-shouye",
        label: "首页",
        pathReg: /^\/home/,
        path: "/home",
        components: <Home />,
    },
    {
        iconName: "mini-sousuo",
        label: "发现",
        pathReg: /^\/search/,
        path: "/search",
        components: <Search />,
    },
    {
        iconName: "mini-mn_pengyou",
        label: "好友",
        pathReg: /^\/friend/,
        path: "/friend",
    },
    {
        iconName: "mini-wo",
        label: "我的",
        pathReg: /^\/user/,
        path: "/user",
    },
];

const mapState = state => ({
    ...get(state, "home"),
});
const mapDispatch = ({ home }) => ({
    ...home,
});
@withRouter
@connect(mapState, mapDispatch)
class MiniFooterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        bindAll(this, ["jump"]);
    }

    jump(path) {
        const { history } = this.props;
        console.log(60, path);
        history.replace(path);
    }
    render() {
        const { history, style, ...restProps } = this.props;
        const pathname = get(history, ["location", "pathname"]);
        const tabbars = tabbarList
            .map(tab => ({
                ...tab,
                actived: Boolean(tab.pathReg.test(pathname)),
            }))
            .map(({ iconName, label, path, actived, component }, index) => (
                <TabBar.Item
                    style={[styles.tab, actived && styles.tabActive]}
                    key={path || index}
                    onPress={() => {
                        this.jump(path);
                    }}
                    title={label}
                    icon={<Icon name={iconName} />}
                    selected={actived}
                >
                    {component}
                </TabBar.Item>
            ));
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#fff"
            >
                {tabbars}
            </TabBar>
        );
    }
}

export default MiniFooterBar;
