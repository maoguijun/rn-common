/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:51:47
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-27 17:42:10
 * @FilePath: \demoRnc\screen\home\index.js
 */
import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./index.styles";

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
