import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function PayCardSucess({ TxtColor, color, Image, bandeira, number, name }) {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <View style={styles.upRow}>
                <View>
                    {Image}
                    <Text style={{color:TxtColor}}>{bandeira}</Text>
                </View>
            </View>
            <View style={styles.downRow}>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberCardColor}>{number}</Text>
                </View>
                <Text style={{color:'#fff'}}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        alignItems:"center",
        borderRadius: 30,
        position: "absolute",
        top: '50%',
        right: '-31%',
        transform:[{translateX: -50} , {translateY:50}]
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

    numberContainer:{
        height: 22,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: "center",   
        justifyContent: "center"
    },

    numberCardColor:{
        color: '#000',
        fontWeight: "bold"
    }

})