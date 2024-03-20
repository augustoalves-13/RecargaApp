import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import ButtonPayment from "../../component/Buttons/ButtonPay";
import BackButton from "../../component/Buttons/BackButton";

export default function ChooseCard({navigation}) {
    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={StylesComponent.subContainer}>
                    <SimpleText
                        title='Adicionar Cartão'
                        subTxt='Escolha o tipo do seu cartão'
                    />
                    <View style={{ width: '100%', gap: 20 , alignItems: "center"}}>
                        <ButtonPayment
                            onPress={()=>navigation.navigate('NameCardPayment')}
                            title='Débito'
                        />
                        <ButtonPayment
                            onPress={()=>navigation.navigate('NameCardPayment')}
                            title='Crédito'
                        />
                    </View>
                </View>
                    <BackButton/>
            </View>
        </View>
    )
}