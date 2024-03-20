import { Text } from "react-native";
import { View } from "react-native";
import { TextInput, StyleSheet } from "react-native";
import { inputShadow } from "../../styles/Shadows";

export default function TextEntry(props) {


    return (
        <View style={{width: '100%' , alignItems: "center" , gap: 5}}>
            <Text style={[{color: '#252525' , fontWeight: '600' , fontSize: 16 , width: '75%'}]}>{props.label}</Text>
            
            <TextInput
                placeholder={props.placeholder}
                style={[styles.container , inputShadow]}
                value={props.value}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
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