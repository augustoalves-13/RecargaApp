import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function ButtonPlataform(SvgImg, title) {
    return (
        <TouchableOpacity style={styles.container}>
            {SvgImg}
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '80%',
        borderRadius: 40,
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "center"
    }
})