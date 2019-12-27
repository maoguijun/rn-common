/*
 * @Author: maoguijun
 * @Date: 2019-12-27 14:53:14
 * @LastEditors  : maoguijun
 * @LastEditTime : 2019-12-27 18:02:52
 * @FilePath: \demoRnc\screen\detail\index.js
 */
import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import styles from "./index.styles";

class DetailsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.detailWrap}>
                <Text>Details Screen</Text>
                <Text>
                    itemId:{" "}
                    {JSON.stringify(navigation.getParam("itemId", "NO-ID"))}
                </Text>
                <Text>
                    otherParam:
                    {JSON.stringify(
                        navigation.getParam("title", "default value")
                    )}
                </Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        navigation.push("Details", {
                            itemId: Math.floor(Math.random() * 100),
                        })
                    }
                />
            </View>
        );
    }
}

export default DetailsScreen;
