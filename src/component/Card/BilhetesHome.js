import React, { useState } from "react";
import { Pressable, StyleSheet, Text, LayoutAnimation, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Path, Svg } from "react-native-svg";
import WhtButton from "../Buttons/WhtButton";
import { cardShadow } from "../../styles/Shadows";

export default function AnimatedCard({ color, title, bottom, onPress, animationContainer, cardVisible, numberCard, animationName, animationButton }) {
    const [buttonClass, setButtonClass] = useState("Wallet");
    const navigation = useNavigation()
    const [name, setName] = useState(title)

    return (
        <View style={[styles.container, { bottom: bottom }, animationContainer , cardShadow]}>
            <Pressable onPress={onPress} style={[{ backgroundColor: color, }, styles.buttonContainer, animationButton]}>
                {cardVisible !== null && (
                    <TouchableOpacity onPress={() => navigation.navigate('HomeRecargaScreen', { name })} style={styles.buttonCard}>
                        <Svg style={styles.iconDollarSign} width="10" height="18" viewBox="0 0 10 18" fill="none" >
                            <Path d="M7.26418 8.17865L3.51338 7.07135C3.07926 6.9452 2.77711 6.53521 2.77711 6.07968C2.77711 5.5085 3.23554 5.04596 3.80164 5.04596H6.10421C6.52792 5.04596 6.94467 5.17561 7.29197 5.41389C7.50382 5.55756 7.7886 5.52252 7.9692 5.34381L9.17779 4.1524C9.42437 3.91062 9.38964 3.50764 9.11528 3.29389C8.2644 2.62109 7.20167 2.24615 6.11116 2.24265V0.560662C6.11116 0.252298 5.8611 0 5.55548 0H4.44413C4.13851 0 3.88846 0.252298 3.88846 0.560662V2.24265H3.80164C1.58935 2.24265 -0.188806 4.15941 0.0160996 6.43359C0.161964 8.049 1.38445 9.36305 2.92645 9.81859L6.48624 10.8698C6.92036 10.9995 7.22251 11.406 7.22251 11.8615C7.22251 12.4327 6.76408 12.8952 6.19798 12.8952H3.89541C3.4717 12.8952 3.05495 12.7656 2.70765 12.5273C2.4958 12.3836 2.21102 12.4187 2.03042 12.5974L0.821828 13.7888C0.575247 14.0306 0.609977 14.4335 0.884342 14.6473C1.73522 15.3201 2.79795 15.695 3.88846 15.6985V17.3805C3.88846 17.6889 4.13851 17.9412 4.44413 17.9412H5.55548C5.8611 17.9412 6.11116 17.6889 6.11116 17.3805V15.6915C7.72956 15.66 9.24725 14.6893 9.78209 13.144C10.5288 10.9855 9.27503 8.77085 7.26418 8.17865Z" fill="white" />
                        </Svg>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>RECARREGAR BILHETE</Text>
                    </TouchableOpacity>
                )}
                <View style={[{ height: "30%", justifyContent: "center" }, animationName]}>
                    <Text style={{
                        color: '#606060',
                        fontSize: 16,
                        fontWeight: "700",
                        fontStyle: "normal",
                    }}>{title}</Text>
                    {cardVisible !== null &&
                        <Text style={{
                            color: '#606060',
                            fontSize: 16,
                            fontWeight: "500",
                            fontStyle: "normal",
                        }}>{numberCard}</Text>
                    }
                </View>
            </Pressable>
            {cardVisible !== null &&
                <WhtButton
                    SvgImg={
                        <Svg width="25" height="22" viewBox="0 0 25 22" fill="none">
                            <Path d="M17.2231 14.7689L18.5931 13.399C18.8071 13.1849 19.1796 13.3347 19.1796 13.643V19.8678C19.1796 21.0023 18.2591 21.9227 17.1246 21.9227H2.05496C0.920449 21.9227 0 21.0023 0 19.8678V4.79811C0 3.6636 0.920449 2.74315 2.05496 2.74315H13.7639C14.0679 2.74315 14.222 3.11133 14.008 3.32967L12.638 4.69964C12.5738 4.76386 12.4881 4.79811 12.394 4.79811H2.05496V19.8678H17.1246V15.0087C17.1246 14.9188 17.1589 14.8331 17.2231 14.7689ZM23.9274 6.12955L12.6851 17.3719L8.81491 17.8C7.69324 17.9241 6.73854 16.978 6.8627 15.8478L7.29081 11.9776L18.5331 0.735289C19.5135 -0.245096 21.0976 -0.245096 22.0737 0.735289L23.9231 2.58475C24.9035 3.56514 24.9035 5.15345 23.9274 6.12955ZM19.6976 7.45243L17.2103 4.96507L9.25587 12.9237L8.94334 15.7193L11.7389 15.4068L19.6976 7.45243ZM22.4718 4.04034L20.6223 2.19088C20.4468 2.01536 20.16 2.01536 19.9887 2.19088L18.6659 3.51376L21.1532 6.00112L22.4761 4.67824C22.6473 4.49843 22.6473 4.21587 22.4718 4.04034Z" fill="#252525" />
                        </Svg>
                    }
                    title='EDITAR BILHETE'
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        right: "-3%",
        width: '100%',
        alignItems: "center",
        gap: 10
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
        position: "absolute",
        bottom: '55%',
        height: 200,
    },

    buttonCard: {
        height: 45,
        width: '65%',
        backgroundColor: '#252525',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        position: "absolute",
        top: -20,
    },

});