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
import { Month, Year } from "../../component/Arrays/Arrays";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";

export default function DateCard({ navigation }) {

    const [selectedMonth, setSelectedMonth] = useState("")
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

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Adicionar Cartão'
                        subTxt='Adicione a data de expiração'
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
                    <PaymentCardBack
                        name={selectedMonth}
                        color='#02A847'
                    />
                </View>
                <ButtonNextBack
                    onPress={() => navigation.navigate('CvvCard')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selectContent: {
        width: 40,
        elevation: 20,
        position: 'absolute',
        top: '90%',
        left: '25%',
        height: '80%'
    },

    listButton: {
        height: 30,
        width: '100%',
        backgroundColor: '#d9d9d9',
        alignItems: "center",
        justifyContent: "center"
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