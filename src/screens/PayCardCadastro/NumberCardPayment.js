import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import TextEntry from "../../component/input/TextEntry";
import PaymentCard from "../../component/Card/PaymentCard";
import { useState } from "react";
import ButtonSet from "../../component/Buttons/ButtonSet";
import DateCard from "./DateCard";

export default function NumberCardPay ({navigation , route}){

    const {name} = route.params
    const [number , setNumber] = useState('0000 0000 0000')


    function handleTextSpace (inputText){
        const filterText = inputText.replace(/\s/g, '')

        const formattedText = filterText.replace(/(.{4})/g, '$1 ')

        setNumber(formattedText)
        
    }
    
    return(
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Adicionar Cartão'
                        subTxt='Digite o número do cartão'
                    />
                    <TextEntry
                        onChangeText={handleTextSpace}
                        keyboardType='numeric'
                    />
                    <PaymentCard
                        color='#DCDDE2'
                        name={name}
                        number={number}
                    />
                </View>
                <ButtonSet onPress={()=>navigation.navigate("DateCardScreen" , {name , number})}/>
            </View>
        </View>
    )
}