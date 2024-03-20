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

export default function NameCardPayScreen({navigation}) {

    const [name, setName] = useState('')

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Adicionar Cartão'
                            subTxt='Digite o nome do titular do cartão'
                        />
                        <TextEntry
                            value={name}
                            onChangeText={setName}
                        />
                        <PaymentCard
                            name={name}
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