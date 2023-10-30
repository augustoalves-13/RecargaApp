import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CellphoneButton({onPress, title, imageSource, height, width, bottom }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={{ height: height, width: width, position: 'absolute', bottom: bottom }} source={imageSource} />
            <Text style={styles.txtButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 5,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20
    },

    txtButton: {
        fontSize: 20,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 20,
        color: "#252525"
    }

})