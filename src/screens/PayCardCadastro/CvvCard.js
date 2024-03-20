import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import TextEntry from "../../component/input/TextEntry";
import SimpleText from "../../component/Textos/SimpleText";
import PaymentCard from "../../component/Card/PaymentCard";
import { useState } from "react";
import HomeButton from "../../component/Buttons/HomeButton";
import BackButton from "../../component/Buttons/BackButton";
import ButtonSet from "../../component/Buttons/ButtonSet";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import PaymentCardBack from "../../component/Card/PaymentBackFront";

export default function CvvCard({navigation}) {

    const [name, setName] = useState('')

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Adicionar Cartão'
                            subTxt='Digite o código de segurança (CVV)'
                        />
                        <TextEntry
                            padding={20}
                            keyboardType='numeric'
                            value={name}
                            onChangeText={setName}
                        />
                        <PaymentCardBack
                            number={name}
                            color='#DCDDE2'
                        />
                    </View>
                    <ButtonSet 
                        onPress={()=>navigation.navigate('NumberCardPayment' , {name})}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}