import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import InputAdd from "../../../component/input/InputAdd";
import ButtonOption from "../../../component/Option/ButtonOption";
import ButtonNextBack from "../../../component/Buttons/ButtonNextBack";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

export default function CellphoneNumber({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={[StylesComponent.boxContent, { justifyContent: "space-between" }]}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Recarga Celular'
                            subTxt='Digite o telefone que deseja cadastrar'
                        />
                        <InputAdd
                            padding={20}
                            keyboardType='numeric'
                        />
                    </View>
                    <ButtonNextBack
                        onPress={() => navigation.navigate("CellphoneNameScreen")}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}