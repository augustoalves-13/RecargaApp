import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import PaymentCardBack from "../../component/Card/PaymentBackFront";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import ScrollDate from "../../component/Scroll/ScrollDate";
import { ScrollShadow } from "../../styles/Shadows";
import { Month, Year, months, year } from "../../component/Arrays/Arrays";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function DateCard({ navigation }) {

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
                            <View style={{flexDirection: 'row' , width:'20%'}}>
                                <Text style={{ color: '#606060', fontWeight: 'bold', width: '80%' }}>{selectedMonth}</Text>
                                <Text style={{ color: '#606060', fontWeight: 'bold', width: '80%' }}>Mês</Text>
                            </View>
                            <SvgImg />
                        </Pressable>
                        <Pressable onPress={handleYear} style={[styles.dateContainer, ScrollShadow]}>
                            <Text style={{ color: '#606060', fontWeight: 'bold', width: '80%' }}>{selectedYear}</Text>
                            <SvgImg />
                        </Pressable>
                    </View>
                    {visibleMonth === true &&
                        <ScrollDate props={months} right={225} Array={Month} onPress={changeMonth} />
                    }
                    {visibleYear === true &&
                        <ScrollDate props={year} right={37} Array={Year} onPress={handleYearConst} />
                    }
                    <PaymentCardBack
                        number={selectedMonth + '/' + selectedYear}
                        color='#DCDDE2'
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})