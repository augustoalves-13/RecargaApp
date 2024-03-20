import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import { useState } from "react";
import TextEntry from "../../component/input/TextEntry";
import CardAdd from "../../component/Card/CardAdd";
import SimpleText from "../../component/Textos/SimpleText";
import ButtonSet from "../../component/Buttons/ButtonSet";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import MoneyInput from "../../component/input/ValueInput";

export default function ValorRecarga({ route, navigation }) {

    const { name } = route.params
    const [rechargeValue , setRechargeValue ] = useState()

    const changeValue = (onValue) => {
        setRechargeValue(onValue)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={{ width: '100%', alignItems: 'center', gap: 30 }}>
                        <SimpleText
                            title='Recarregar'
                            subTxt='Qual valor quer recarregar'
                        />
                        <MoneyInput/>
                        <CardAdd
                            name={name}
                        />
                    </View>
                    <ButtonSet
                        onPress={() => navigation.navigate('PagamentoScreen', { name, rechargeValue })}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}