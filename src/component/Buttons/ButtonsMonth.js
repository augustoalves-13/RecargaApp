import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import { useState } from "react";
import ButtonOption from "../Option/ButtonOption";

export default function DateButton() {

    const [modalVisible, setModalVisible] = useState(false)

    const [monthDate, setMonthDate] = useState('01')
    const [yearDate, setYearDate] = useState('2023')

    const Month = [
        { mês: '01' },
        { mês: '02' },
        { mês: '03' },
        { mês: '04' },
        { mês: '05' },
        { mês: '06' },
        { mês: '07' },
        { mês: '08' },
        { mês: '09' },
        { mês: '10' },
        { mês: '11' },
        { mês: '12' },
    ]

    const Year = [
        { mês: '2023' },
        { mês: '2024' },
        { mês: '2025' },
        { mês: '2026' },
        { mês: '2027' },
        { mês: '2028' },
        { mês: '2029' },
        { mês: '2030' },
        { mês: '2031' },
        { mês: '2032' },
        { mês: '2033' },
        { mês: '2034' },
    ]

    return (
        <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
            <View style={StylesComponent.buttonContainer}>

                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
                    <Text>{monthDate}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
                    <Text>{yearDate}</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalBox}>
                                <View>
                                    <ScrollView style={styles.listContainer}>
                                        {Month.map((month) => (
                                            <ButtonOption
                                                onPress={() => setMonthDate(month.mês)}
                                                title={month.mês}
                                            />
                                        ))}
                                    </ScrollView>
                                </View>
                                <View>
                                    <ScrollView style={styles.listContainer}>
                                        {Year.map((month) => (
                                            <ButtonOption
                                                onPress={() => setMonthDate(month.mês)}
                                                title={month.mês}
                                            />
                                        ))}
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 100,
        borderRadius: 15,
        elevation: 20,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    },

    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',        
        justifyContent: "center",
    },

    modalBox: {
        position:'absolute',
        right: '-13%',
        top: '32%',
        transform:[{translateY: 50} , {translateX: -50}],
        opacity: 1,
        height: '30%',
        width: '100%',
        flexDirection: "row",
        justifyContent: "center",
        gap:80,
        alignItems: "center"
    },

    listContainer:{
        width: 60,
        height: 100,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        backgroundColor: '#555555'
    }
})