import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import InputAdd from "../../../component/input/InputAdd";
import ButtonNextBack from "../../../component/Buttons/ButtonNextBack";
import { useState } from "react";

export default function SMSCellphone({navigation}){

    const [type , setType] = useState('newNumber')
    
    return(
        <View style={StylesComponent.container}>
            <View style={[StylesComponent.boxContent , {justifyContent: "space-between"}]}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Recarga Celular'
                        subTxt='Confirme o SMS enviado ao número informado'
                    />
                    <InputAdd
                        keyboardType='numeric'
                    />
                </View>
                <ButtonNextBack
                    onPress={()=>navigation.navigate('SuccessFullScreenCellphone' , {type})}
                />
            </View>
        </View>
    )
}