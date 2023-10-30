import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import InputAdd from "../../../component/input/InputAdd";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Modal } from "react-native";
import { useState } from "react";
import ButtonNextBack from "../../../component/Buttons/ButtonNextBack";
import BackButton from "../../../component/Buttons/BackButton";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

export default function ChangePassScreen({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Mudar Senha'
                        />
                        <InputAdd
                            padding={20}
                            label='Senha Atual'
                        />
                        <InputAdd
                            padding={20}
                            label='Nova Senha'
                        />
                        <InputAdd
                            padding={20}
                            label='Confirmar Senha'
                        />
                        <TouchableOpacity style={{ width: '80%' }} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ color: '#000', opacity: 0.4, textDecorationLine: "underline", textDecorationColor: '#606060' }}>Esqueceu a Senha</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            visible={modalVisible}
                            transparent={true}
                            onRequestClose={
                                () => { setModalVisible(!modalVisible) }
                            }
                        >
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={StylesComponent.container}>
                                    <View style={StylesComponent.boxContent}>
                                        <View style={StylesComponent.subContainer}>
                                            <SimpleText
                                                title='Mudar Senha'
                                                subTxt='Digite seu email para mudar sua senha'
                                            />
                                            <InputAdd
                                                padding={20}
                                            />
                                        </View>
                                        <ButtonNextBack />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    </View>
                    <View style={[StylesComponent.buttonContainer, { height: 60, overflow: "hidden" }]}>
                        <BackButton />
                        <TouchableOpacity style={[StylesComponent.buttons, { borderColor: '#252525', borderWidth: 2 }]}>
                            <Text style={StylesComponent.txtPrimary}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}