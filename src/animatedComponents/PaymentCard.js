import { StyleSheet, View } from "react-native";
import { PropsCards } from "../component/CardProps/CardsProps";
import Cards from "../screens/More/PaymentConfig/CardButton";
import { useState } from "react";
import { LayoutAnimation } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PaymentCardComponent({ onPress }) {
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedNumber , setSelectedNumber] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null);

    const navigation = useNavigation()

    function handleItemClick(item) {
        setSelectedItem(item)
        navigation.navigate("EditCardPayment", {
            selectedItem: item
        })
    }

    function handleClass(card) {
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

        if (selectedCard === card.id) {
            setSelectedCard(null);
        } else {
            setSelectedCard(card.id);
        }
        
        if (selectedNumber === card.id) {
            setSelectedNumber(null);
        } else {
            setSelectedNumber(card.id);
        }
    }

    return (
        PropsCards.map((card) => (
                <Cards
                    styleClass={selectedCard === card.id ? styles.selecionado : styles.container}
                    animationPress={() => handleClass(card)}
                    stylesNumber={selectedNumber === card.id ? styles.down : styles.top}
                    Image={card.img}
                    TESTE={selectedCard === card.id ? card.id : null}
                    name={card.nome}
                    number={card.number}
                    flag={card.flag}
                    onPress={()=>handleItemClick(card)}
                    color={card.color}
                    bottom={card.bottom}
                />
            ))
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        padding: 30,
        elevation: 20,
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "80%",
        borderRadius: 30,
        height: 130,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowRadius: 12,
        shadowOpacity: 1,
    },

    selecionado: {
        position: 'relative',
        marginBottom: 60,
        height: 200,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },


    buttonCard: {
        height: 40,
        width: 110,
        backgroundColor: '#252525',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },

    rowUp: {
        width: '98%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    top: {
        height: 20,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10
    },

    down: {
        position: 'relative',
        bottom: -95,
        right: 123,
        height: 20,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10
    },

    numberContainer: {
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 10
    }
})