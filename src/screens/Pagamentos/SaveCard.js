    import { View } from "react-native";
    import StylesComponent from "../../styles/StylesComponent";
    import SimpleText from "../../component/Textos/SimpleText";
    import SetInput from "../../component/input/SetInput";
    import HomeTxt from "../../component/Textos/HomeTxt";
    import WalletApp from "./Wallet";
    import AnimatedCard from "./Wallet";
    import { useState } from "react";
    import { PropsCards, PropsCardsWallet } from "../../component/CardProps/CardsProps";
    import ButtonSet from "../../component/Buttons/ButtonSet";

    export default function SaveCard({ route, navigation }) {

        const { value } = route.params
        const [selectedItem, setSelectedItem] = useState(null)
        const [type , setType] = useState('Payment') 


        function navigateTo(){
            navigation.navigate('SuccessFullScreen' , {
                nome: selectedItem.nome,
                number: selectedItem.number,
                image: selectedItem.img,
                flag: selectedItem.flag,
                color: selectedItem.color,
                type
            })
        }
        
        return (
            <View style={StylesComponent.container}>
                <View style={StylesComponent.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Recarga'
                            subTxt='Escolha um cartão'
                        />
                        <SetInput
                            value={value}
                        />
                        <HomeTxt />
                        <View style={{ width: '100%', alignItems: "center", }}>
                            {PropsCardsWallet.map((card) => (
                                <AnimatedCard key={card}
                                    bottom={card.bottom}
                                    color={card.color}
                                    name={card.nome}
                                    number={card.number}
                                    image={card.img}
                                />
                            ))}
                        </View>
                    </View>
                    <ButtonSet 
                        onPress={navigateTo}
                    />
                </View>
            </View>
        )
    }