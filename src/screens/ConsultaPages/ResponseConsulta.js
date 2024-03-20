import { Image, StyleSheet, Text, View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import CardAdd from "../../component/Card/CardAdd";
import resumo from "../../../assets/resumo.png"
import recarga from '../../../assets/entrada.png'
import saida from '../../../assets/saida.png'
import HomeButton from "../../component/Buttons/HomeButton";

function ResponseConsultaScreen({ route }) {

    const { inputName, InputValue } = route.params

    const historico = [
        { img: recarga, tipo: 'Recarga Comum', valor: '150,00', hora: '11:14 - 25/09', color: '#47B520' },
        { img: saida, tipo: 'Saída', valor: '4,40', hora: '10:35 - 25/09', color: '#B52920' },
        { img: resumo, tipo: 'Junho', hora: 'Saldo Final: R$ 4,40', color: '#696969' }
    ]

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Consultar'
                        subTxt={'Olá Usuário'}
                    />
                    <CardAdd
                        name={inputName}
                        Number={InputValue}
                    />
                    <View style={styles.valuesContent}>
                        <View style={{ alignItems: "center", gap: 5 }}>
                            <Text style={{ fontWeight: "bold" }}>Comum</Text>
                            <View style={styles.saldoView}>
                            </View>
                        </View>
                        <View style={{ alignItems: "center", gap: 5 }}>
                            <Text style={{ fontWeight: "bold" }}>Vale Transporte</Text>
                            <View style={styles.saldoView}>
                            </View>
                        </View>
                    </View>
                    {historico.map((historico, item) => (
                        <View style={styles.container} key={item}>
                            <Image source={historico.img} />
                            <View style={{ width: '50%', alignItems: "flex-start" }}>
                                <Text style={{ color: historico.color, fontSize: 22, fontWeight: "bold" }}>{historico.tipo}</Text>
                                <Text style={{ color: historico.color }}>{historico.hora}</Text>
                            </View>
                            <View style={{ width: '30%', alignItems: "flex-end" }}>
                               <Text style={{ color: historico.color, fontSize: 22, fontWeight: "bold" }}>{historico.valor}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <HomeButton/>
            </View>
        </View>
    )
}

export default ResponseConsultaScreen

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '80%'
    },

    valuesContent: {
        flexDirection: "row",
        gap: 30
    },

    saldoView: {
        width: 140,
        height: 50,
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
        shadowColor: "#rgba(0,0,0,0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 7,
        shadowOpacity: 1,
        elevation: 5
    }
})