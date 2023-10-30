import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonsFooter({ onPress, imageSource, span }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {imageSource}
            <Text style={styles.spanTxt}>{span}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        gap: 5,
    },

    spanTxt: {
        color: '#fff',
        fontWeight: 'bold',
    }
})