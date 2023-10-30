import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { inputShadow } from "../../styles/Shadows";

export default function SetInput({ value, label }) {

    return (
        <View style={styles.content}>
            <Text style={styles.txt}>{label}</Text>
            <View style={[styles.container , inputShadow]}>
                <Text style={{ color: '#000' , opacity: 0.4, fontWeight: 'bold' }}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    content:{
        width: '100%',
        gap: 5,
        alignItems: "center"
    },

    txt:{
        color: '#000',
        opacity:0.4,
        width: '75%'
    },
    
    container: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: '80%',
        backgroundColor: '#f8f8f8',
        height: 40,
        borderRadius: 40
    }
})