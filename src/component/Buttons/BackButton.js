import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import LogoUget from "../Logo/LogoFooter";

export default function BackButton() {

    const navigation = useNavigation()

    return (
        <View style={{alignItems: "center" , gap: 15}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
                <Text style={{ color: '#f8f8f8', fontWeight: "bold" }}>Voltar</Text>
            </TouchableOpacity>
            <LogoUget/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252525',
        height: 45,
        width: 120,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})