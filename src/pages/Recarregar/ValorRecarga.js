import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import { useState } from "react";
import InputAdd from "../../component/input/InputAdd";
import CardAdd from "../../component/Card/CardAdd";
import SimpleText from "../../component/Textos/SimpleText";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

export default function ValorRecarga({ route, navigation }) {

    const { name } = route.params
    const [value, setValue] = useState(4.40)

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={{ width: '100%', alignItems: 'center', gap: 30 }}>
                        <SimpleText
                            title='Recarregar'
                            subTxt='Quanto quer recarregar'
                        />
                        <InputAdd
                            padding={20}
                            value={value}
                            keyboardType='numeric'
                        />
                        <CardAdd
                            name={name}
                        />
                    </View>
                    <ButtonNextBack
                        onPress={() => navigation.navigate('PagamentoScreen', { name, value })}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}