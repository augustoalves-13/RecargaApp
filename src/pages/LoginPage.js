import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import StylesComponent from "../styles/StylesComponent";
import LogoLogin from "../component/Logo/LogoLogin";
import InputAdd from "../component/input/InputAdd";
import PasswordInput from "../component/input/PasswordInput";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import WhtButton from "../component/Buttons/WhtButton";
import { Text } from "react-native";
import { Path, Svg } from "react-native-svg";
import { inputShadow } from "../styles/Shadows";
import { Image } from "react-native";

export default function LoginScreen({navigation}) {

    const plataforma = [
        {
            title: 'Login com Google', img: (
                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <Path d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#FFC107" />
                    <Path d="M1.15308 5.3455L4.43858 7.755C5.32758 5.554 7.48058 4 10.0001 4C11.5296 4 12.9211 4.577 13.9806 5.5195L16.8091 2.691C15.0231 1.0265 12.6341 0 10.0001 0C6.15908 0 2.82808 2.1685 1.15308 5.3455Z" fill="#FF3D00" />
                    <Path d="M9.99991 20C12.5829 20 14.9299 19.0115 16.7044 17.404L13.6094 14.785C12.5717 15.5742 11.3036 16.001 9.99991 16C7.39891 16 5.19041 14.3415 4.35841 12.027L1.09741 14.5395C2.75241 17.778 6.11341 20 9.99991 20Z" fill="#4CAF50" />
                    <Path d="M19.8055 8.0415H19V8H10V12H15.6515C15.2571 13.1082 14.5467 14.0766 13.608 14.7855L13.6095 14.7845L16.7045 17.4035C16.4855 17.6025 20 15 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#1976D2" />
                </Svg>
            )
        },
        {
            title: 'Login com Apple', img: (
                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.6113 3.92206C14.471 2.88423 15.0483 1.43802 14.8907 0C13.6543 0.0501516 12.1579 0.82392 11.2726 1.86175C10.4773 2.78086 9.78135 4.25163 9.96967 5.66099C11.3473 5.76846 12.7556 4.96092 13.6133 3.92206M16.7043 13.0497C16.7391 16.767 19.9652 18.0044 20 18.0208C19.9744 18.1078 19.4862 19.7833 18.301 21.514C17.2775 23.0104 16.2151 24.5016 14.5406 24.5323C12.8959 24.562 12.3677 23.5569 10.4865 23.5569C8.60739 23.5569 8.0199 24.5016 6.46213 24.562C4.84704 24.6234 3.61679 22.9439 2.58305 21.4536C0.474638 18.4036 -1.13738 12.8357 1.02733 9.07745C2.10098 7.21058 4.02312 6.02843 6.10902 5.99875C7.69545 5.96804 9.19283 7.06626 10.1621 7.06626C11.1324 7.06626 12.9522 5.74594 14.8651 5.93939C15.6665 5.97316 17.9141 6.26281 19.3583 8.37635C19.2416 8.44799 16.6757 9.94231 16.7033 13.0497" fill="black" />
                </Svg>
            )
        },
        {
            title: 'Login com Facebook', img: (
                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <Path d="M20 9.9662C20 4.46205 15.5228 0 10 0C4.47719 0 0 4.46198 0 9.9662C0 14.9406 3.65687 19.0637 8.4375 19.8113V12.8471H5.89844V9.9662H8.4375V7.77052C8.4375 5.27274 9.93047 3.89305 12.2146 3.89305C13.3088 3.89305 14.4531 4.0877 14.4531 4.0877V6.54032H13.1922C11.9498 6.54032 11.5625 7.30857 11.5625 8.09676V9.9662H14.3359L13.8926 12.8471H11.5625V19.8113C16.3431 19.0637 20 14.9407 20 9.9662Z" fill="#1877F2" />
                </Svg>
            )
        },
    ]




    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StylesComponent.container}>
                <View style={[StylesComponent.boxContent, { height: '100%' }]}>
                    <View style={[StylesComponent.subContainer, { justifyContent: "space-evenly", height: '100%' }]}>
                        <LogoLogin />
                        <View style={{ gap: 30, alingItems: 'center', width: '100%' }}>
                            <InputAdd
                                padding={20}
                                color={{ color: '#000' }}
                                label='E-mail'
                            />
                            <PasswordInput
                                bool={true}
                                label='Senha'
                            />
                            <View style={{ width: '100%', alignItems: "center", gap: 10 }}>
                                <WhtButton
                                    onPress={()=>navigation.navigate('HomeScreen')}
                                    title='Login'
                                />
                                <Text
                                    onPress={()=>navigation.navigate("CadastroScreen")}
                                    style={{ color: '#606060', fontSize: 13, fontWeight: '600' }}>Criar Minha Conta</Text>
                            </View>
                        </View>
                        <Image
                            source={require('../../assets/LogIn.png')}
                            style={{
                                height: 353.49,
                                width: 330.53,
                                flex: 1,
                                resizeMode: 'cover',
                                zIndex: -1,
                                position: 'absolute',
                                bottom: 20,
                                left: 0,
                            }}
                        />
                        <View style={{ width: '100%', alignItems: 'center', gap: 10 }}>
                            {plataforma.map((item) => (
                                <TouchableOpacity style={[styles.container, inputShadow]}>
                                    <View style={styles.buttonContent}>
                                        <View style={{ width: '45%', height: 45, alingItems: 'center', justifyContent: 'center' }}>
                                            {item.img}
                                        </View>
                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ textAling: 'center' }}>{item.title}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '80%',
        borderRadius: 40,
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "start",
        paddingLeft: 20,
        gap: 20,
        alignItems: "center"
    },

    buttonContent: {
        width: '50%',
        flexDirection: "row",
        justifyContent: "space-between"
    }
})