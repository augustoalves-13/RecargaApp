import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import { TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native'
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import { useState } from "react";
import HomeButton from "../../component/Buttons/HomeButton";

export default function ConsultaNFC ({navigation , route}){

  const [inputName , setInputName] = useState('')

  function navigateTo(){
    setTimeout(navigation.navigate('ResponseConsultaNfcScreen') , 5000)
  }


  return(
    <View style={StylesComponent.container}>
      <View style={StylesComponent.boxContent}>
          <SimpleText
            title='Consultar'
            subTxt='Enconste seu cartão na parte traseira do seu celular e aguarde a leitura.'
          />
          <TouchableOpacity style={{width: '100%' , alignItems: "center"}}>
            <LottieView
              source={require('./animation.json')}
              style={{height: 400}}
              autoPlay
              loop
            />
          </TouchableOpacity>
          <HomeButton/>
      </View>
    </View>
  )
}