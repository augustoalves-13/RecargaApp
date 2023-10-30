import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import SetInput from "../../component/input/SetInput";
import HomeTxt from "../../component/Textos/HomeTxt";

export default function HomeCard() {
    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View>
                    <SimpleText
                        title='Recarga'
                        subTxt='Escolha um cartão'
                    />
                    <SetInput/>
                    <HomeTxt/>
                </View>
                
            </View>
        </View>
    )
}