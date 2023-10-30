import { Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonPayment({ title , onPress}) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    content: {
        width: '100%',
        gap: 5,
        alignItems: "center"
    },

    txt: {
        color: '#000',
        opacity: 0.4,
        width: '75%'
    },

    container: {
        justifyContent: "center",
        alignItems: "center",
        width: '80%',
        backgroundColor: '#f8f8f8',
        height: 40,
        borderRadius: 40,
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 7,
        shadowOpacity: 1
    }
})