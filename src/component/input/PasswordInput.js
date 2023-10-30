import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { inputShadow } from "../../styles/Shadows";
import { Ionicons } from '@expo/vector-icons';


export default function PasswordInput({ label , bool}) {

    const [passwordVisible, setPasswordVisible] = useState(false)
    const [newPassword, setNewPassword] = useState(true)

    function handlePassword() {
        if (passwordVisible === false) {
            setPasswordVisible(true)
        } else {
            setPasswordVisible(false)
        }
    }

    useEffect(()=>{
        setNewPassword(bool)
    },[])

    return (
        <View style={{ width: '100%', alignItems: "center", gap: 5 }}>
            <Text style={{ color: '#000', fontWeight: '600', fontSize: 16, width: '75%' }}>{label}</Text>
            <View style={[styles.container, inputShadow]}>
                <TextInput
                    value={passwordVisible}
                    onChange={(text) => setPasswordVisible(text)}
                    secureTextEntry={!passwordVisible}
                    style={{ width: '80%', height: '40%', paddingLeft: 20 }}
                />
                <TouchableOpacity onPress={handlePassword} style={styles.eyesButton}>
                    {passwordVisible === true &&
                        <Ionicons name="md-eye-sharp" size={24} color="black" />
                    }
                    {passwordVisible !== true &&
                        <Ionicons name="md-eye-off-sharp" size={24} color="black" />
                    }
                </TouchableOpacity>
            </View>
            {newPassword === true &&
                <Text style={{ color: '#606060', width: '75%', fontSize: 13, fontWeight: '600' }}>Esqueci minha senha</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 40,
        backgroundColor: '#f8f8f8',
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    eyesButton: {
        width: 50,
        height: '100%',
        justifyContent: "space-evenly",
        alignItems: "center",

    },

    containerInput: {
        width: '80%',
        backgroundColor: '#f8f8f8',
        height: 40,
        borderRadius: 40,
        paddingLeft:30,
        elevation: 7,
    }
})


export function EmailInput({label , onChangeText, value, keyboardType,placeholder}) {


    return (
        <View style={{width: '100%' , alignItems: "center" , gap: 5}}>
            <Text style={[{color: 'rgba(0,0,0,1)' , fontWeight: '600' , fontSize: 16 , width: '75%'}]}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.containerInput , inputShadow]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize='characters' 
            />

        </View>
    )
}
 