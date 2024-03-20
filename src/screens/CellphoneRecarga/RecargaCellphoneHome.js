import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import Claro from '../../../assets/Claro.png'
import Vivo from '../../../assets/VIVO.png'
import tim from '../../../assets/tim.png'
import oi from '../../../assets/oi.png'
import HomeButton from "../../component/Buttons/HomeButton";
import { useNavigation } from "@react-navigation/native";
import { Path, Svg } from "react-native-svg";
import HomeTxt from "../../component/Textos/HomeTxt";

export default function RecargaCellphoneHome() {
    const navigation = useNavigation();

    const numeros = [
        { id: 1, img: Claro, nome: 'Gabriel Cordeiro', numero: '(11) 91234-1234' },
        { id: 2, img: Vivo, nome: 'Augusto Alves', numero: '(11) 91234-1234' },
        { id: 3, img: tim, nome: 'Rafae Setrak', numero: '(11) 91234-1234' },
        { id: 4, img: oi, nome: 'Carlos Hurga', numero: '(11) 91234-1234' },
        { id: 5, img: Claro, nome: 'Ana Carolina', numero: '(11) 91234-1234' }
    ];

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        navigation.navigate('RecargaScreen', {
            selectedItem: item
        });
    };

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <SimpleText
                    title='Recarga Celular'
                    subTxt='Escolha o número para recarregar'
                />
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '80%', alignItems: "flex-end", height: 50 }}>
                        <HomeTxt
                            onPress={() => navigation.navigate('AddNumberScreen')}
                        />
                    </View>
                    {numeros.map((numero) => (
                        <TouchableOpacity onPress={() => handleItemClick(numero)} style={styles.buttonContainer} key={numero.id}>
                            <Image source={numero.img} />
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 22 }}>{numero.nome}</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{numero.numero}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <HomeButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 70,
        width: '77%',
        borderRadius: 25,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: '#252525',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        gap: 20,
        paddingHorizontal: 20,
        marginTop: 15
    },

    addButton: {
        height: 30,
        width: 30,
        backgroundColor: '#252525',
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    }
});
