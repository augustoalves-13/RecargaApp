import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import LogoUget from "../Logo/LogoFooter";


export default function HomeButton() {

    const navigation = useNavigation()

    return (
        <View style={{alignItems: "center" , gap: 15}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.container}>
                <Text style={styles.buttonText}>INÍCIO</Text>
                <FontAwesome name="home" size={24} color="#252525" />
            </TouchableOpacity>
            <LogoUget/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 140,
        borderRadius: 40,
        borderStyle: "solid",
        borderWidth: 1.5,
        borderColor: '#252525'
    },

    buttonText: {
        color: '#252525',
        fontWeight: "bold"
    }
})