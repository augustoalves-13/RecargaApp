import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import TextEntry from "../../component/input/TextEntry";
import CellphoneCard from "../../component/Card/CellphoneCard";
import ButtonSet from "../../component/Buttons/ButtonSet";
import LogoUget from "../../component/Logo/LogoFooter";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import MoneyInput from "../../component/input/ValueInput";

export default function RecargaScreen({ route, navigation }) {
    const { selectedItem } = route.params;

    const [rechargeValue , setRechargeValue] = useState('')

    const onRechargeValue = (newValue) => {
        rechargeValue(newValue)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <SimpleText
                        title='Recarga Celular'
                        subTxt='Qual valor quer recarregar'
                    />

                    <View style={{ width: '100%', alignItems: "center", gap: 60, marginBottom: '30%' }}>
                        <MoneyInput/>
                        <CellphoneCard
                            imageSource={selectedItem.img}
                            title={selectedItem.nome}
                            number={selectedItem.numero}
                        />
                    </View>
                    <ButtonSet onPress={() => navigation.navigate('CellphonePagamentoScreen', { selectedItem, rechargeValue })} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
