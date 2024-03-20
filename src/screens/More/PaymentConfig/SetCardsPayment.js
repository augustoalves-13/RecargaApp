import { Dimensions } from "react-native";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function CardPayment({ name, number, Image, flag, color, bottom }) {

    const { width, height } = Dimensions.get('window');
    const borderRadiusPercentage = 8

    const borderRadius = (Math.min(width, height) * borderRadiusPercentage) / 100;

    return (
        <View style={[{ backgroundColor: color, bottom: bottom, borderRadius: borderRadius, width: "80%", height: 200, }, styles.container]}>
            <View style={styles.rowUp}>
                <View style={styles.flagType}>
                    {Image}
                    <Text style={{ color: '#fff' }}>{flag}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-start', width: '98%', gap: 5 }}>
                <Text style={{ fontWeight: 'bold' , color: '#fff'}}>{number}</Text>
                <Text style={{ color: '#fff' }}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        padding: 30,
        elevation: 5,
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "80%",
        height: 200,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowRadius: 12,
        shadowOpacity: 1,
    },

    selecionado: {
        position: 'relative',
        marginVertical: 60,
        height: 200,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },


    buttonCard: {
        height: 40,
        width: 110,
        backgroundColor: '#252525',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },

    rowUp: {
        width: '98%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    numberCardContainer: {
        height: 20,
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    }
});
