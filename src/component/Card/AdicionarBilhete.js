import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function AdicionarBilheteComponent({ title, subtitle }) {

    const navigation = useNavigation()
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('NumberCardScreen')} style={styles.container}>
            <View style={styles.bilhete}>
                <View>
                    <Image style={{ height: 40, width: 40 }} source={require('../../../assets/logo_bu.png')} />
                </View>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: "bold", width: 130 }}>{title}</Text>
                <Text style={{ fontWeight: "bold" }}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        gap: 20
    },

    bilhete: {
        height: 120,
        width: 170,
        backgroundColor: '#BABAC4',
        borderRadius: 15,
        padding: 0,
    },


})