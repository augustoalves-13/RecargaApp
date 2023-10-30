import { View } from "react-native";
import SimpleText from "../../component/Textos/SimpleText";
import AdicionarBilheteComponent from "../../component/Card/AdicionarBilhete";
import HomeButton from "../../component/Buttons/HomeButton";
import StylesComponent from "../../styles/StylesComponent";


export default function AdicionarBilheteScreen() {

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent }>
                <SimpleText
                    title='Adicionar Bilhetes'
                    subTxt='Escolha o bilhete mais parecido'
                />
                <View style={{ width: '75%', gap: 20 }}>
                    <AdicionarBilheteComponent 
                    title='Bilhete Único'
                    subtitle='(B.U.)'
                    />
                    <AdicionarBilheteComponent 
                    title='Documento Nacional do Estudante'
                    subtitle='(DNE)'
                    />
                    <AdicionarBilheteComponent 
                    title='PASSAGEIRO ESPECIAL'
                    subtitle='(B.U.)'
                    />
                    <AdicionarBilheteComponent 
                    title='Mãe Paulistana'
                    />
                </View>
                <HomeButton/>
            </View>
        </View>
    )
}
