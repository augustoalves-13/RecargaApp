import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { LayoutAnimation } from "react-native";
import { Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function Cards({ name, number, Image, flag, color, bottom, zIndex, onPress , animationPress , styleClass , TESTE , stylesNumber}) {
  const [buttonClass, setButtonClass] = useState("Wallet");
  const [numberClass , setNumberClass] = useState('')

  return (
    <Pressable onPress={animationPress} style={[{ backgroundColor: color, bottom, zIndex, }, styles.container, styleClass]}>
      <View style={styles.rowUp}>
        <View style={styles.flagType}>
          {Image}
          <Text style={{ color: '#fff' }}>{flag}</Text>
        </View>
          <View style={[styles[numberClass] , styles.numberContainer , stylesNumber]}>
            <Text style={{ fontWeight: 'bold' , color: '#fff'}}>{number}</Text>
          </View>
        {TESTE !== null && (
          <TouchableOpacity onPress={onPress} >
            <Svg width="25" height="22" viewBox="0 0 25 22" fill="none">
              <Path d="M17.2231 14.7689L18.5931 13.399C18.8071 13.1849 19.1796 13.3347 19.1796 13.643V19.8678C19.1796 21.0023 18.2591 21.9227 17.1246 21.9227H2.05496C0.920449 21.9227 0 21.0023 0 19.8678V4.79811C0 3.6636 0.920449 2.74315 2.05496 2.74315H13.7639C14.0679 2.74315 14.222 3.11133 14.008 3.32967L12.638 4.69964C12.5738 4.76386 12.4881 4.79811 12.394 4.79811H2.05496V19.8678H17.1246V15.0087C17.1246 14.9188 17.1589 14.8331 17.2231 14.7689ZM23.9274 6.12955L12.6851 17.3719L8.81491 17.8C7.69324 17.9241 6.73854 16.978 6.8627 15.8478L7.29081 11.9776L18.5331 0.735289C19.5135 -0.245096 21.0976 -0.245096 22.0737 0.735289L23.9231 2.58475C24.9035 3.56514 24.9035 5.15345 23.9274 6.12955ZM19.6976 7.45243L17.2103 4.96507L9.25587 12.9237L8.94334 15.7193L11.7389 15.4068L19.6976 7.45243ZM22.4718 4.04034L20.6223 2.19088C20.4468 2.01536 20.16 2.01536 19.9887 2.19088L18.6659 3.51376L21.1532 6.00112L22.4761 4.67824C22.6473 4.49843 22.6473 4.21587 22.4718 4.04034Z" fill="white" />
            </Svg>
          </TouchableOpacity>
        )}
      </View>
      {TESTE !== null && (
        <View style={{alignItems: 'flex-start', justifyContent: "center" , width: '98%'}}>
          <Text style={{ color: '#fff' }}>{name}</Text>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 30,
    elevation: 20,
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "80%",
    borderRadius: 30,
    height: 130,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowRadius: 12,
    shadowOpacity: 1,
  },

  selecionado: {
    position: 'relative',
    marginBottom: 60,
    height: 200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowRadius: 5,
    shadowOpacity: 1
  },


  buttonCard: {
    height: 40,
    width: 110,
    backgroundColor: '#252525',
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  rowUp:{
    width: '98%',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  "top":{
    height: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },

  "down":{
    position:'relative',
    bottom: -95,
    right: 123,
    height: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },

  numberContainer:{
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10
  }
});
