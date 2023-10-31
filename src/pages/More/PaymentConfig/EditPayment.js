import { Modal, StyleSheet, View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import InputAdd from "../../../component/input/InputAdd";
import ButtonMonth from "../../../component/Buttons/ButtonsMonth";
import Cards from "./CardButton";
import CardPayment from "./SetCardsPayment";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import ButtonComponent from "../../../component/Buttons/ButtonComponent";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { Pressable } from "react-native";
import ScrollDate from "../../../component/Scroll/ScrollDate";
import { ScrollShadow } from "../../../styles/Shadows";

export default function EditPaymentCard({ route, navigation }) {

    const { selectedItem } = route.params
    const [type, setType] = useState('PayCardTrash')

    const [modalVisible, setModalVisible] = useState(false)

    const [visibleMonth, setVisibleMonth] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)

    const changeMonth = (mes) => {
        setSelectedMonth(mes)
    }

    const handleMonth = () => {
        if (visibleMonth === false) {
            setVisibleMonth(true)
        } else if (visibleMonth === true) {
            setVisibleMonth(false)
        }
    }

    const handleYear = () => {
        if (visibleYear === false) {
            setVisibleYear(true)
        } else if (visibleYear === true) {
            setVisibleYear(false)
        }
    }


    function navigateTo() {
        navigation.navigate('SuccessFullScreen', {
            nome: selectedItem.nome,
            number: selectedItem.number,
            image: selectedItem.img,
            flag: selectedItem.flag,
            color: selectedItem.color,
            type
        })

        setModalVisible(!modalVisible)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Editar Cartão'
                        />
                        <InputAdd
                            padding='25%'
                            value={selectedItem.nome}
                            label='Nome do titular'
                        />
                        <View style={{ width: '100%', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                            <Pressable onPress={handleMonth} style={[styles.dateContainer, ScrollShadow]}>
                                <Text style={{ color: '#606060', fontWeight: 'bold', width: '80%' }}>{selectedMonth}</Text>
                            </Pressable>
                            <Pressable style={[styles.dateContainer, ScrollShadow]}>
                                <Text style={{ color: '#606060', fontWeight: 'bold', width: '80%' }}>{selectedMonth}</Text>
                            </Pressable>
                        </View>
                        {visibleMonth === true &&
                            <ScrollDate right={225} Array={Month} onPress={changeMonth} />
                        }
                        {visibleYear === true &&
                            <ScrollDate right={37} Array={Year} onPress={changeMonth} />
                        }              
                      <CardPayment
                            flag={selectedItem.flag}
                            Image={selectedItem.img}
                            name={selectedItem.nome}
                            number={selectedItem.number}
                            color={selectedItem.color}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonContainer}>
                            <Text style={{ color: '#B52920', fontWeight: 'bold', fontSize: 18 }}>Excluir Cartão</Text>
                            <FontAwesome5 name="trash" size={17} color="#B52920" />
                        </TouchableOpacity>
                    </View>
                    <ButtonComponent
                        onBack={() => navigation.goBack()}
                        onPress={() => navigation.goBack()}
                        title='Salvar'
                    />
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.container}>
                        <View style={styles.boxContent}>
                            <Text style={{ fontWeight: "bold", fontSize: 20, width: '83%' }}>Você realmente quer excluir seu cartão? Isso impossibilita de realizar pagamentos com esse cartão </Text>
                            <CardPayment
                                flag={selectedItem.flag}
                                Image={selectedItem.img}
                                name={selectedItem.nome}
                                number={selectedItem.number}
                                color={selectedItem.color}
                            />
                            <View style={{ height: 45, overflow: "hidden", width: '100%' }}>
                                <ButtonComponent
                                    onPress={navigateTo}
                                    onBack={() => setModalVisible(!modalVisible)}
                                    title='Excluir'
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        width: 175,
        height: 45,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(181, 41, 32, 1)",
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '"rgba(0, 0, 0, 0.5)"',
        justifyContent: "center",
        alignItems: "center"
    },

    boxContent: {
        height: '65%',
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#D9D9D9',
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20
    },

    dateContainer: {
        height: 45,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#f8f8f8',
        zIndex: 3,
        justifyContent: "center",
        alignItems: "center"
    }
})