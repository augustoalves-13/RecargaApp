import { Text } from "react-native";
import { Platform } from "react-native";
import { View } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import { inputShadow } from "../../styles/Shadows";

export default function InputAdd({label , onChangeText, value, keyboardType, padding,    placeholder , color}) {


    return (
        <View style={{width: '100%' , alignItems: "center" , gap: 5}}>
            <Text style={[{color: 'rgba(0,0,0,0.4)' , fontWeight: '600' , fontSize: 16 , width: '75%'} , color]}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.container , inputShadow]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize='characters' 
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#f8f8f8',
        height: 40,
        borderRadius: 40,
        textAlign: "center",
        elevation: 7,
    }
})