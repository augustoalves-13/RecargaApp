import { View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import InputAdd from "../../component/input/InputAdd";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import CardAdd from "../../component/Card/CardAdd";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function NumberCardScreen() {

    const navigation = useNavigation();
    const [number, setNumber] = useState('Digite o número do bilhete');

    function handleTextSpace (inputText){
        const filterText = inputText.replace(/\s/g, '')

        const formattedText = filterText.replace(/(.{3})/g, '$1 ')

        setNumber(formattedText)
        
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Adicionar Bilhetes'
                            subTxt='Digite o número do seu cartão'
                        />
                        <InputAdd  
                            padding={20}
                            placeholder='Digite o número do seu bilhete'
                            onChangeText={handleTextSpace}
                            keyboardType='numeric'
                        />
                        <CardAdd
                            Number={number}
                        />
                    </View>
                    <ButtonNextBack
                        onPress={() => navigation.navigate('NameCardScreen', { number })}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}