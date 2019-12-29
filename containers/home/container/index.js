/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:51:47
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-29 18:50:47
 * @FilePath: \demoRnc\screen\home\index.js
 */
import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./index.styles";
import { connect } from "react-redux";
import { get } from "lodash";

const mapState = state => ({
    ...get(state, "home"),
});
const mapDispatch = ({ home }) => ({
    ...home,
});
@connect(mapState, mapDispatch)
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.homeWrap}>
                <Text>home Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.navigate("Detail", {
                            itemId: 86,
                            title: "anything you want here11",
                        })
                    }
                />
            </View>
        );
    }
}

export default HomeScreen;
