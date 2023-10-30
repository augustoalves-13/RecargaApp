import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import InputAdd from "../../component/input/InputAdd";
import CardAdd from "../../component/Card/CardAdd";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
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
                        <InputAdd
                            padding={20}
                            placeholder='Digite seu nome'
                            value={nome}
                            onChangeText={setNome}
                        />
                        <CardAdd
                            Number={number}
                            name={nome}
                        />
                    </View>
                    <ButtonNextBack onPress={()=>navigation.navigate('SuccessFullScreen' , {nome , number , type , flag , image , color})}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default NameCardScreen