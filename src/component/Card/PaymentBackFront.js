import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function PaymentCardBack({color,number, name }) {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <View style={styles.upRow}>
                <View>
                </View>
            </View>
            <View style={styles.downRow}>
                    <Text style={styles.numberCardColor}>{number}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '80%',
        alignItems:"center",
        borderRadius: 30,
    },

    upRow:{
        height: '50%',
        width: '98%',
        alignItems: "flex-start",
        justifyContent: "center"
    },

    downRow:{
        height:'50%',
        width: '80%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },

    numberCardColor:{
        color: '#000',
        fontWeight: "bold"
    }

})