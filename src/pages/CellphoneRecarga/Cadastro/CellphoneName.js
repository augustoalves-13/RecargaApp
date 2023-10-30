import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import InputAdd from "../../../component/input/InputAdd";
import ButtonOption from "../../../component/Option/ButtonOption";
import ButtonNextBack from "../../../component/Buttons/ButtonNextBack";
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
                        <InputAdd 
                            padding={20}
                        />
                    </View>
                        <ButtonNextBack
                            onPress={() => navigation.navigate("SMSCellphoneScreen")}
                        />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}