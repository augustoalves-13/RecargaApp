import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import TextEntry from "../../component/input/TextEntry";
import CardAdd from "../../component/Card/CardAdd";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import ButtonSet from "../../component/Buttons/ButtonSet";
import { Text } from "react-native";

function NameCardScreen({ route , navigation}) {

    const [nome, setNome] = useState("")
    const [type , setType , color] = useState('bilhete')
    const [flag , image] = useState('')
    const { number } = route.params

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Adicionar Bilhetes'
                            subTxt='Como deseja chama-lo?'
                        />
                        <TextEntry
                            placeholder='Digite seu nome'
                            value={nome}
                            onChangeText={setNome}
                        />
                        <CardAdd
                            Number={number}
                            name={nome}
                        />
                    </View>
                    <ButtonSet onPress={()=>navigation.navigate('SuccessFullScreen' , {nome , number , type , flag , image , color})}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default NameCardScreen