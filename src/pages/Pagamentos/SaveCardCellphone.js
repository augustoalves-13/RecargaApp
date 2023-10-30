import { View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import SimpleText from "../../component/Textos/SimpleText";
import SetInput from "../../component/input/SetInput";
import HomeTxt from "../../component/Textos/HomeTxt";
import WalletApp from "./Wallet";
import AnimatedCard from "./Wallet";
import { useState , useRef} from "react";
import { PropsCards, PropsCardsWallet } from "../../component/CardProps/CardsProps";
import ButtonNextBack from "../../component/Buttons/ButtonNextBack";
import AnimatedCardCellphone from "../../animatedComponents/AnimatedCardCellphone";
import { useNavigation } from "@react-navigation/native";
import Animated, { Easing, useSharedValue, withSpring, withTiming, useAnimatedStyle, withRepeat, withSequence, runOnJS, interpolate } from 'react-native-reanimated';


export default function SaveCardCellphone({ route }) {

    const { value, selectedItem } = route.params
    const [type, setType] = useState('Payment')

    const navigation = useNavigation()


    const [clicked, setClicked] = useState(false);

    // Variáveis de animação
    const translateY = useSharedValue(0);
    const rotate = useSharedValue('0deg');
    const scale = useSharedValue(1);

    // Função para animação ao clicar
    const handlePress = () => {
        if (!clicked) {
            // Primeiro clique
            translateY.value = withSequence(
                withTiming(-50, { duration: 500, easing: Easing.bounce }),
                withTiming(0, { duration: 500 })
            );
            rotate.value = withSequence(
                withTiming('-10deg', { duration: 250 }),
                withTiming('10deg', { duration: 250 }),
                withTiming('0deg', { duration: 250 })
            );
            scale.value = withSpring(1);
            setClicked(true);
        } else {
            // Segundo clique
            translateY.value = withSpring(0);
            rotate.value = withSpring('0deg');
            scale.value = withSpring(1);
            setClicked(false);

            // Navegue para outra página após a animação
            setTimeout(() => {
                navigation.navigate('SuccessFullScreenCellphone', { selectedItem });
            }, 1000);
        }
    };

    const cardStyle = useAnimatedStyle(() => {
        return {
          transform: [{ translateY: translateY.value }, { rotate: rotate.value }, { scale: scale.value }],
        };
      });
    

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
                            <AnimatedCardCellphone key={card}
                                cardStyle={cardStyle}
                                onPress={handlePress}
                                bottom={card.bottom}
                                color={card.color}
                                name={card.nome}
                                number={card.number}
                                image={card.img}
                            />
                        ))}
                    </View>
                </View>
                <ButtonNextBack
                />
            </View>
        </View>
    )
}