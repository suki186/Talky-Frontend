import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export const CurrentBox = ({ icon, currentInfo, currentState, iconStyle }) => {
    return (
        <View style = { styles.container }> 
            <Image 
                source = { icon }
                style = { iconStyle }
                resizeMode = "contain"
            />
            <Text style = { styles.labelText }>
                { currentInfo }
            </Text>
            <Text style = { styles.valueText }>
                { currentState }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 153,
        height: 36,
        borderRadius: 33,
        backgroundColor: "#FFEC9F",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    labelText : {
        fontSize: 10,
        fontWeight: "500",
        marginLeft: 10.84,
        marginRight: 14.33
    },

    valueText : {
        fontSize: 18,
        fontWeight: "700"
    }
})