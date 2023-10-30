import { View, Text, StyleSheet } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import { useState } from "react";
import { Svg, Path, Rect } from 'react-native-svg'
import SimpleText from "../../component/Textos/SimpleText";
import HomeButton from "../../component/Buttons/HomeButton";

export default function Pedidos() {


    function Cell() {
        return (
            <Svg style={styles.group26} width="20" height="30" viewBox="0 0 20 30" fill="none" >
                <Rect width="20" height="30" rx="2" fill="#696969" />
                <Rect x="2" y="2" width="16" height="26" rx="2" fill="#FBFCFC" />
                <Path d="M6 2H14V3C14 3.55228 13.5523 4 13 4H7C6.44772 4 6 3.55228 6 3V2Z" fill="#696969" />
            </Svg>
        )
    }


    function Bilhete() {
        return (
            <Svg width="30" height="24" viewBox="0 0 30 24" fill="none" >
                <Path d="M27.5 0H2.5C1.11979 0 0 1.11979 0 2.5V20.8333C0 22.2135 1.11979 23.3333 2.5 23.3333H27.5C28.8802 23.3333 30 22.2135 30 20.8333V2.5C30 1.11979 28.8802 0 27.5 0ZM27.5 20.8333H15.7917C15.8385 20.599 15.8333 21.0208 15.8333 19.6667C15.8333 18.0104 14.2656 16.6667 12.3333 16.6667C11.7708 16.6667 11.3594 17.0833 10 17.0833C8.59896 17.0833 8.26042 16.6667 7.66667 16.6667C5.73438 16.6667 4.16667 18.0104 4.16667 19.6667C4.16667 21.0208 4.15625 20.599 4.20833 20.8333H2.5V5.83333H27.5V20.8333ZM18.75 16.6667H24.5833C24.8125 16.6667 25 16.4792 25 16.25V15.4167C25 15.1875 24.8125 15 24.5833 15H18.75C18.5208 15 18.3333 15.1875 18.3333 15.4167V16.25C18.3333 16.4792 18.5208 16.6667 18.75 16.6667ZM18.75 13.3333H24.5833C24.8125 13.3333 25 13.1458 25 12.9167V12.0833C25 11.8542 24.8125 11.6667 24.5833 11.6667H18.75C18.5208 11.6667 18.3333 11.8542 18.3333 12.0833V12.9167C18.3333 13.1458 18.5208 13.3333 18.75 13.3333ZM18.75 10H24.5833C24.8125 10 25 9.8125 25 9.58333V8.75C25 8.52083 24.8125 8.33333 24.5833 8.33333H18.75C18.5208 8.33333 18.3333 8.52083 18.3333 8.75V9.58333C18.3333 9.8125 18.5208 10 18.75 10ZM10 15C11.8385 15 13.3333 13.5052 13.3333 11.6667C13.3333 9.82812 11.8385 8.33333 10 8.33333C8.16146 8.33333 6.66667 9.82812 6.66667 11.6667C6.66667 13.5052 8.16146 15 10 15Z" fill="#696969" />
            </Svg>
        )
    }


    const julho = [
        { img: <Bilhete />, tipoTitle: "Recarga NFC", dateTime: "12:35 - 30/07", value: 100 },
        { img: <Cell />, tipoTitle: "Recarga Celular", dateTime: "10:35 - 30/07", value: 25+','+90 },
        { img: <Bilhete />, tipoTitle: "Recarga NFC", dateTime: "08:35 - 30/07", value: 100 }
    ]

    const july = [
        { img: <Cell />, tipoTitle: "Recarga Celular", dateTime: "10:35 - 30/07", value: 25+','+90 },
    ]

    const [firstDay, setFirstDay] = useState('30 Julho')
    const [secondDay, setSecondDay] = useState('29 Julho')
    const [thirdDay, setThirdDay] = useState('28 Julho')

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Pedidos'
                    />
                    <Text style={{ width: '80%', fontSize: 26, color: '#7b7b7b', fontWeight: '800' }}>{firstDay}</Text>
                    {julho.map((item) => (
                        <View style={styles.container}>
                            {item.img}
                            <View style={styles.content}>
                                <Text style={{ fontSize: 18, color: "#696969", fontWeight: 'bold' }}>{item.tipoTitle}</Text>
                                <Text style={{ fontSize: 15, color: "#696969", fontWeight: '600' }}>{item.dateTime}</Text>
                            </View>
                            <Text style={{ fontSize: 18, color: "#696969", fontWeight: 'bold' }}>R${item.value}</Text>
                        </View>
                    ))}
                    <Text style={{ width: '80%', fontSize: 26, color: '#7b7b7b', fontWeight: '800' }}>{secondDay}</Text>
                    {july.map((item) => (
                        <View key={item} style={styles.container}>
                            {item.img}
                            <View style={styles.content}>
                                <Text style={{ fontSize: 18, color: "#696969", fontWeight: 'bold' }}>{item.tipoTitle}</Text>
                                <Text style={{ fontSize: 15, color: "#696969", fontWeight: '600' }}>{item.dateTime}</Text>
                            </View>
                            <Text style={{ fontSize: 18, color: "#696969", fontWeight: 'bold' }}>R${item.value}</Text>
                        </View>
                    ))}
                </View>
                <HomeButton/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        width: '80%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    content: {
        width: '50%'
    }
})