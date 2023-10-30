import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import InputAdd from "../../component/input/InputAdd";
import CellphoneCard from "../../component/Card/CellphoneCard";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import LogoUget from "../../component/Logo/LogoFooter";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

export default function RecargaScreen({ route, navigation }) {
    const { selectedItem } = route.params;

    const [Inputvalue, setInputValue] = useState('R$0,00')

    const reverseText = (value) => {

        value = value.replace(/[^\d.]/g ,'').replace(/^0+/g, '') 
        
        if(value === ''){
            value === 'R$0,00'
        } else if (!value.includes('.')){
            value = `R$ ${value},00`
        } else if(value.indexOf('.') === value.lenght - 2){
            value === `R$ ${value}0`
        }

        return value

    }

    const handleChangeText = (text) => {
        setInputValue(reverseText(text))
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <SimpleText
                        title='Recarga Celular'
                        subTxt='Quanto quer recarregar'
                    />

                    <View style={{ width: '100%', alignItems: "center", gap: 60, marginBottom: '30%' }}>
                        <InputAdd
                            padding={20}
                            label={Inputvalue}
                            value={Inputvalue}
                            onChangeText={handleChangeText}
                            keyboardType='numeric'
                        />
                        <CellphoneCard
                            imageSource={selectedItem.img}
                            title={selectedItem.nome}
                            number={selectedItem.numero}
                        />
                    </View>
                    <ButtonNextBack onPress={() => navigation.navigate('CellphonePagamentoScreen', { selectedItem, Inputvalue })} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
