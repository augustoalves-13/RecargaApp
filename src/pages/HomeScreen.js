import { View } from "react-native";
import StylesComponent from "../styles/StylesComponent";
import HomeTxt from "../component/Textos/HomeTxt";
import Footer from "../component/Footer/Footer";
import BilheteHome from "../component/Card/BilhetesHome";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { ArrayHome } from "../animatedComponents/HomeCard";
import { LayoutAnimation } from "react-native";

export default function HomeScreen({ navigation }) {
    const [selectedCard, setSelectedCard] = useState(null);

    function handleClass(card) {
        
        () => {
            
        }

        const config = {
            duration: 900,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: .8,
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
            setSelectedCard(card.id)
        }
    }

    
    return (
        <View style={StylesComponent.containerHome}>
            <View style={StylesComponent.boxContentHome}>
                <HomeTxt title='Bilhetes' onPress={() => navigation.navigate('AdicionarBilheteScreen')} />
                {ArrayHome.map((card, index) => (
                    <BilheteHome
                        key={index}
                        animationButton={selectedCard === card.id ? styles.nameContainer : styles.buttonContainer}
                        animationName={selectedCard === card.id ? styles.cardSelecected : null}
                        animationContainer={selectedCard === card.id ? styles.selecionado : styles.container}
                        onPress={() => handleClass(card)}
                        cardVisible={selectedCard === card.id ? styles.buttonCard : null}
                        title={card.title}
                        bottom={card.bottom}
                        color={card.color}
                        numberCard={card.number}
                    />
                ))}
                <Footer />
            </View>
        </View>
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

    buttonContainer: {
        paddingVertical: 10,
        elevation: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        borderRadius: 20,
        height: "100%",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },

    selecionado: {
        height: 200,
        width: '80%',
        position: "absolute",
        bottom: '55%',
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
        backgroundColor: '#252525',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 7,
        shadowOpacity: 1
    },

    cardSelecected: {
        width: "90%",
    },

    nameContainer:{
        justifyContent: 'flex-end'
    }
})