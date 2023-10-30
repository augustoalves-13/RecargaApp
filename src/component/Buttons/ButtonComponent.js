import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoUget from "../Logo/LogoFooter";
import { useState } from "react";
import StylesComponent from "../../styles/StylesComponent";

export default function ButtonComponent({ title, onPress , onBack}) {

    const navigation = useNavigation()


    return (
        <View style={{alignItems: "center" , gap: 20 , width: '100%'}}>
            <View style={StylesComponent.buttonContainer}>
                <TouchableOpacity onPress={onBack} style={[StylesComponent.buttons, styles.backButton]}>
                    <Text style={StylesComponent.txtSecondary}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={[StylesComponent.buttons, styles.nextButton]}>
                    <Text style={StylesComponent.txtPrimary}>{title}</Text>
                </TouchableOpacity>
            </View>
            <LogoUget/>
        </View>
    )
}

const styles = StyleSheet.create({

    backButton: {
        backgroundColor: '#252525'
    },

    nextButton: {
        borderStyle: "solid",
        borderWidth: 2,
    }
})