/*
 * @Author: maoguijun
 * @Date: 2019-12-29 15:44:41
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-30 11:06:53
 * @FilePath: \demoRnc\components\mini-footerbar\index.js
 */
import React, { Component } from "react";
import { Text, Footer, FooterTab, Button } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { withRouter } from "react-router-native";
import { connect } from "react-redux";
import { get, bindAll } from "lodash";

const tabbarList = [
    {
        iconName: "home",
        label: "首页",
        pathReg: /^\/home/,
        path: "/home",
    },
    {
        iconName: "search1",
        label: "诗词库",
        pathReg: /^search/,
        path: "/search",
    },
    {
        iconName: "user",
        label: "我的",
        pathReg: /^user/,
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
            .map(({ iconName, label, path }, index) => (
                <Button
                    key={path || index}
                    vertical={true}
                    onPress={() => {
                        this.jump(path);
                    }}
                >
                    <Icon name={iconName} />
                    <Text>{label}</Text>
                </Button>
            ));
        return (
            <Footer>
                <FooterTab>{tabbars}</FooterTab>
            </Footer>
        );
    }
}

export default MiniFooterBar;
