import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import BackButton from "../../../component/Buttons/BackButton";
import SimpleText from "../../../component/Textos/SimpleText";
import { Text } from "react-native";

export default function UseTermosScreen() {
    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={[StylesComponent.subContainer , {gap: 10 }]}>
                    <SimpleText
                        title='Termos de Uso'
                    />
                    <Text style={{fontWeight: '700' , fontSize: 15 , color:'#000' , opacity: 0.4 , width: '75%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since... Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since... Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</Text>
                </View>
                <BackButton/>
            </View>
        </View>
    )
}