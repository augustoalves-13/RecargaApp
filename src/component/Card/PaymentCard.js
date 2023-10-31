import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function PaymentCard({ TxtColor, color, Image, bandeira, number, name }) {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <View style={styles.upRow}>
                <View>
                    {Image}
                    <Text style={{color:TxtColor}}>{bandeira}</Text>
                </View>
            </View>
            <View style={styles.downRow}>
                <View>
                    <Text style={styles.numberCardColor}>{number}</Text>
                </View>
                <Text style={{color:'#000'}}>{name}</Text>
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
        width: '90%',
        alignItems: "flex-start",
        justifyContent: "center"
    },

    downRow:{
        height:'50%',
        width: '90%',
        gap: 10,
        alignItems: "flex-start",
        justifyContent: "center"
    },



    numberCardColor:{
        color: '#000',
        fontWeight: "bold"
    }

})