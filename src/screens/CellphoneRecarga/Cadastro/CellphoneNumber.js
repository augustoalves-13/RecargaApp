import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import SimpleText from "../../../component/Textos/SimpleText";
import TextEntry from "../../../component/input/TextEntry";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import ButtonSet from "../../../component/Buttons/ButtonSet";

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
                        <TextEntry
                            padding={20}
                            keyboardType='numeric'
                        />
                    </View>
                    <ButtonSet
                        onPress={() => navigation.navigate("CellphoneNameScreen")}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}