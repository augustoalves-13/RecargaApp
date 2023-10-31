import { View } from "react-native";
import StylesComponent from "../../../styles/StylesComponent";
import HomeTxt from "../../../component/Textos/HomeTxt";
import { useState } from "react";
import Cards from "./CardButton";
import BackButton from "../../../component/Buttons/BackButton";
import { ClipPath, Defs, Path, Rect, Svg, SvgUri } from "react-native-svg";
import { Image } from "react-native";
import { LayoutAnimation } from "react-native";
import { PropsCards } from "../../../component/CardProps/CardsProps";
import PaymentCardComponent from "../../../animatedComponents/PaymentCard";

export default function HomePaymentScreen({ navigation }) {

    const [buttonClass, setButtonClass] = useState("Wallet");
    const [selectedItem, setSelectedItem] = useState(null);


    function handleItemClick(item) {
        setSelectedItem(item)
        navigation.navigate("EditCardPayment", {
            selectedItem: item
        })
    }


    function handleClass() {
        const config = {
            duration: 700,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 3
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
        };

        LayoutAnimation.configureNext(config);

        setButtonClass((prevClass) => (prevClass === "Wallet" ? "selecionado" : "Wallet"));
    }


    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={[StylesComponent.subContainer, { height: '100%', justifyContent: 'space-between', alignItems: 'center', width: '100%' }]}>
                    <View style={{ height: 60, alignItems: "center", justifyContent: "flex-end", width: '100%' }}>
                        <HomeTxt
                            onPress={() => navigation.navigate('ChooseCard')}
                            title='Pagamentos'
                        />
                    </View>
                    <View style={{ width: '100%', alignItems: "center", minHeight: 300, justifyContent: 'center' }}>
                        <PaymentCardComponent
                            onPress={() => navigation.navigate('EditCardPayment', { selectedItem })}
                        />
                    </View>
                    <View style={{ position: 'absolute', bottom: 0, zIndex: 999 }}>
                        <BackButton />
                    </View>
                </View>
            </View>
        </View>
    )
}