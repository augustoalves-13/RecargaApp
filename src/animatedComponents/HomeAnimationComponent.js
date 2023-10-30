import { useState } from "react";
import { LayoutAnimation } from "react-native";
import { ArrayHome } from "./HomeCard";
import BilheteHome from "../component/Card/BilhetesHome";
import { StyleSheet } from "react-native";

export default function HomeAnimationComponent(){


    const [selectedCard, setSelectedCard] = useState(null)

    function handleClass(card) {
        const config = {
            duration: 700,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.7,
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
        };

        LayoutAnimation.configureNext(config);

        if (selectedCard === card.id) {
            setSelectedCard(null)
        } else {
            setSelectedCard(card.id)
        }
    }
    
    
    return(
        ArrayHome.map((card) => (
            <BilheteHome
                animationContainer={selectedCard === card.id ? styles.selecionado : styles.container}
                onPress={handleClass}
                title={card.title}
                bottom={card.bottom}
                color={card.color}
            />
        ))
    )
}

const styles = StyleSheet.create({
    container: {
            paddingVertical: 10,
            position: "absolute",
            elevation: 20,
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            borderRadius: 20,
            height: 150,
            right: "-3%",
            transform: [{ translateX: -50 }, { translateY: -50 }],
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: {
                width: 0,
                height: -2
            },
            shadowRadius: 5,
            shadowOpacity: 1
        },
    
        selecionado: {
            position: "absolute",
            bottom: '55%',
            height: 200,
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: {
                width: 0,
                height: -2
            },
            shadowRadius: 5,
            shadowOpacity: 1
        },
    
        outros: {
            position: "absolute",
            bottom: 10,
        },
    
        buttonCard: {
            height: 40,
            width: 110,
            backgroundColor: '#252525',
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center"
        }
    })