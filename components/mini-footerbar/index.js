/*
 * @Author: maoguijun
 * @Date: 2019-12-29 15:44:41
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-31 13:39:00
 * @FilePath: \demoRnc\components\mini-footerbar\index.js
 */
import React, { Component } from "react";
import { Text, Footer, FooterTab, Button, View } from "native-base";
import Icon from "react-native-vector-icons/iconfont";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { get, bindAll } from "lodash";
import styles from "./index.style";
const tabbarList = [
    {
        iconName: "mini-shouye",
        label: "首页",
        pathReg: /^\/home/,
        path: "/home",
    },
    {
        iconName: "mini-sousuo",
        label: "发现",
        pathReg: /^\/search/,
        path: "/search",
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
        history.replace(path);
    }
    render() {
        const { history } = this.props;
        const pathname = get(history, ["location", "pathname"]);

        const tabbars = tabbarList
            .map(tab => ({
                ...tab,
                actived: Boolean(tab.pathReg.test(pathname)),
            }))
            .map(({ iconName, label, path, actived }, index) => (
                <View
                    style={[styles.tab, actived && styles.tabActive]}
                    key={path || index}
                    onTouchEnd={() => {
                        this.jump(path);
                    }}
                >
                    <Icon
                        name={iconName}
                        style={[actived && styles.iconActive, styles.icon]}
                    />
                    <Text style={[actived && styles.labelActive, styles.label]}>
                        {label}
                    </Text>
                </View>
            ));
        return (
            <Footer>
                <FooterTab style={styles.footerTab}>{tabbars}</FooterTab>
            </Footer>
        );
    }
}

export default MiniFooterBar;
