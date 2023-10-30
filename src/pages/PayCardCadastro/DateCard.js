import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import { useState } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import PaymentCardBack from "../../component/Card/PaymentBackFront";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import ScrollDate from "../../component/Scroll/ScrollDate";
import { ScrollShadow } from "../../styles/Shadows";

export default function DateCard({navigation}) {

    const [value ,setValue] = useState('')    

    const pickerSelects = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];
      
      

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Adicionar Cartão'
                        subTxt='Adicione a data de expiração'
                    />
                    <View style={[styles.dateContainer , ScrollShadow]}>
                        <Text style={{color: '#606060' , fontWeight:'bold' , width: '80%'}}>{value + 'Mês'}</Text>
                    </View>
                    <ScrollDate/>
                    <PaymentCardBack
                        color='#02A847'
                    />
                </View>
                <ButtonNextBack
                    onPress={()=>navigation.navigate('CvvCard')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selectContent:{
        width: 40,
        elevation: 20,
        position: 'absolute',
        top: '90%',
        left: '25%',
        height: '80%'
    },

    listButton:{
        height: 30,
        width: '100%',
        backgroundColor: '#d9d9d9',
        alignItems: "center",
        justifyContent: "center"
    },

    dateContainer:{
        height: 45,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#f8f8f8',
        zIndex: 3,
        justifyContent: "center",
        alignItems: "center"
    }
})