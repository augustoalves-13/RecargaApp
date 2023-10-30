import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import StylesComponent from "../../styles/StylesComponent"
import SimpleText from "../../component/Textos/SimpleText"
import SetInput from "../../component/input/SetInput"
import LogoUget from "../../component/Logo/LogoFooter"
import { Path, Svg } from "react-native-svg"

export default function PixScreen({ navigation, route }) {

    const { value } = route.params

    return (
        <View style={StylesComponent.container}>
            <View style={StylesComponent.boxContent}>
                <View style={{ width: '100%', alignItems: 'center', gap: 30 }}>
                    <SimpleText
                        title="Recarga"
                        subTxt="Escanei o QRCode e realize o pagamento"
                    />
                    <SetInput
                        value={value}
                    />
                    <View style={styles.containerPayment}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                            <Path d="M2.88351e-05 58.3333V8.33336C2.88351e-05 5.97225 0.800029 3.99169 2.40003 2.39169C4.00003 0.791695 5.9778 -0.00552672 8.33336 2.88351e-05H58.3333C60.6945 2.88351e-05 62.675 0.800029 64.275 2.40003C65.875 4.00003 66.6722 5.9778 66.6667 8.33336V58.3333C66.6667 60.6945 65.8667 62.675 64.2667 64.275C62.6667 65.875 60.6889 66.6722 58.3333 66.6667H8.33336C5.97225 66.6667 3.99169 65.8667 2.39169 64.2667C0.791695 62.6667 -0.00552672 60.6889 2.88351e-05 58.3333ZM16.6667 50H50V16.6667H16.6667V50ZM2.88351e-05 141.667V91.6667C2.88351e-05 89.3056 0.800029 87.325 2.40003 85.725C4.00003 84.125 5.9778 83.3278 8.33336 83.3333H58.3333C60.6945 83.3333 62.675 84.1333 64.275 85.7333C65.875 87.3333 66.6722 89.3111 66.6667 91.6667V141.667C66.6667 144.028 65.8667 146.008 64.2667 147.608C62.6667 149.208 60.6889 150.006 58.3333 150H8.33336C5.97225 150 3.99169 149.2 2.39169 147.6C0.791695 146 -0.00552672 144.022 2.88351e-05 141.667ZM16.6667 133.333H50V100H16.6667V133.333ZM83.3333 58.3333V8.33336C83.3333 5.97225 84.1333 3.99169 85.7333 2.39169C87.3333 0.791695 89.3111 -0.00552672 91.6667 2.88351e-05H141.667C144.028 2.88351e-05 146.008 0.800029 147.608 2.40003C149.208 4.00003 150.006 5.9778 150 8.33336V58.3333C150 60.6945 149.2 62.675 147.6 64.275C146 65.875 144.022 66.6722 141.667 66.6667H91.6667C89.3056 66.6667 87.325 65.8667 85.725 64.2667C84.125 62.6667 83.3278 60.6889 83.3333 58.3333ZM100 50H133.333V16.6667H100V50ZM133.333 150V133.333H150V150H133.333ZM83.3333 100V83.3333H100V100H83.3333ZM100 116.667V100H116.667V116.667H100ZM83.3333 133.333V116.667H100V133.333H83.3333ZM100 150V133.333H116.667V150H100ZM116.667 133.333V116.667H133.333V133.333H116.667ZM116.667 100V83.3333H133.333V100H116.667ZM133.333 116.667V100H150V116.667H133.333Z" fill="#252525" />
                        </Svg>
                        <Text style={styles.keyPay}>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Quem manda na minha terra sou euzis!</Text>
                    </View>
                </View>
                <View style={{ gap: 20, alignItems: 'center' }}>
                    <View style={styles.subContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, styles.buttons]}>
                            <Text style={[styles.textButtons, { color: '#fff' }]}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.copyButton, styles.buttons]}>
                            <Text style={[styles.textButtons, { color: '#252525' }]}>Copiar</Text>
                        </TouchableOpacity>
                    </View>
                    <LogoUget />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    subContainer: {
        flexDirection: "row",
        gap: 40
    },

    buttons: {
        height: 45,
        width: 120,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },

    backButton: {
        backgroundColor: '#252525',
    },


    copyButton: {
        borderColor: '#252525',
        borderWidth: 2
    },

    textButtons: {
        fontWeight: '800',
    },

    containerPayment: {
        width: '100%',
        alignItems: "center",
        gap: 20,
    },

    qrCode: {
        height: 150,
        width: 150,
        backgroundColor: '#252525',
        borderRadius: 30
    },

    keyPay: {
        width: 200,
        fontWeight: 'bold',
        textAlign: "center"
    }
})