import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import TextEntry from "../../../component/input/TextEntry";
import ButtonSet from "../../../component/Buttons/ButtonSet";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

export default function CellphoneName({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={[StylesComponent.subContainer]}>
                        <SimpleText
                            title='Recarga Celular'
                            subTxt='Como deseja chamar esse telefone'
                        />
                        <TextEntry 
                            padding={20}
                        />
                    </View>
                        <ButtonSet
                            onPress={() => navigation.navigate("SMSCellphoneScreen")}
                        />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}