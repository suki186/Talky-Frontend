import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useState } from "react";

import MENU_STAR from "../../../assets/images/talktalk/menu_star.png";
import { SentenceScreen } from "../../sentenceScreen/SentenceScreen";

export const StarMenuBox = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style = { styles.boxContainer }>
            <TouchableOpacity 
                        onPress = { () => setModalOpen(true) }
                        style = { styles.container }
                    >
                        <View style = { styles.menuTitle }>
                            <Text style = { styles.titleText }>즐겨찾기 문장들</Text>
                        </View>
                        <Image 
                            source = { MENU_STAR }
                            style = { styles.iconImage }
                            resizeMode = "contain"
                        />
            </TouchableOpacity>

            { modalOpen && (
                <SentenceScreen
                    visible = { modalOpen }
                    onClose = { () => setModalOpen(false) }
                />
            )}
        </View>   
    )
}

const styles = StyleSheet.create({
    boxContainer : {
        flexDirection: "row",
        gap: 13.33
    },

    container: {
        width: 228,
        height: 125,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 236, 159, 0.2)",
        borderColor: "#FFD321",
        borderRadius: 16.67,
        borderWidth: 6.67,
        gap: 8
    },

    menuTitle: {
        alignItems: "center",
        textAlign: "center"
    },

    titleText: {
        backgroundColor: "rgba(255, 211, 33, 0.5)",
        paddingHorizontal: 10,
        paddingVertical: 6.67,
        textAlign: "center",
        borderRadius: 16.67,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "600",
        marginTop: 21.67
    },

    iconImage: {
        height: 68,
        marginBottom: 16.33
    }
})