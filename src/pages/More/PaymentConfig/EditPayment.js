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
import { Month, Year, months, year } from "../../../component/Arrays/Arrays";
import { Path, Svg } from "react-native-svg";

export default function EditPaymentCard({ route, navigation }) {

    const { selectedItem } = route.params
    const [type, setType] = useState('PayCardTrash')

    const [modalVisible, setModalVisible] = useState(false)

    const [selectedMonth, setSelectedMonth] = useState("01")
    const [selectedYear, setSelectedYear] = useState('2023')
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

    const handleYearConst = (year) => {
        setSelectedYear(year)
    }

    
    const SvgImg = () => {
        return (
            <Svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 16" fill="none">
                <Path d="M8.5 1.5C8.5 0.947715 8.05228 0.5 7.5 0.5C6.94772 0.5 6.5 0.947715 6.5 1.5L8.5 1.5ZM6.79289 15.7071C7.18342 16.0976 7.81658 16.0976 8.20711 15.7071L14.5711 9.34315C14.9616 8.95262 14.9616 8.31946 14.5711 7.92893C14.1805 7.53841 13.5474 7.53841 13.1569 7.92893L7.5 13.5858L1.84315 7.92893C1.45262 7.53841 0.819456 7.53841 0.428932 7.92893C0.0384075 8.31946 0.0384075 8.95262 0.428932 9.34315L6.79289 15.7071ZM6.5 1.5L6.5 15L8.5 15L8.5 1.5L6.5 1.5Z" fill="#252525" />
            </Svg>
        )
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
                                <View style={{ flexDirection: 'row', width: '20%', }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold', width: '80%' }}>{selectedMonth}</Text>
                                    <Text style={{ color: '#000', fontWeight: 'bold', width: '100%' }}>Mês</Text>
                                </View>
                                <SvgImg />
                            </Pressable>
                            <Pressable onPress={handleYear} style={[styles.dateContainer, ScrollShadow]}>
                                <View style={{ flexDirection: 'row', width: '35%', }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold', width: '80%' }}>{selectedYear}</Text>
                                    <Text style={{ color: '#000', fontWeight: 'bold', width: '100%' }}>Ano</Text>
                                </View>
                                <SvgImg />
                            </Pressable>
                        </View>
                        {visibleMonth === true &&
                            <ScrollDate top='39%' props={months} right={225} Array={Month} onPress={changeMonth} />
                        }
                        {visibleYear === true &&
                            <ScrollDate top='39%' props={year} right={37} Array={Year} onPress={handleYearConst} />
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
        paddingHorizontal:13,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})