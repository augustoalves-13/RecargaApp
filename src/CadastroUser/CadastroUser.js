import { View } from "react-native";
import LogoLogin from "../component/Logo/LogoLogin";
import StylesComponent from "../styles/StylesComponent";
import InputAdd from "../component/input/InputAdd";
import ButtonNextBack from "../component/Buttons/ButtonNextBack";

export default function CadastroUser({navigation}) {
    return (
        <View style={StylesComponent.container}>
            <View style={[StylesComponent.boxContent, { height: '100%' }]}>
                <View style={[StylesComponent.subContainer , {justifyContent: 'space-evenly', height: '85%'}]}>
                    <LogoLogin />
                    <View style={{width: '100%' , alignItems: "center" , gap: 15}}>
                        <InputAdd
                            color={{color:"#000"}}
                            label='Nome Completo'
                        />
                        <InputAdd
                            color={{color:"#000"}}
                            label='E-mail'
                        />
                        <InputAdd
                            color={{color:"#000"}}
                            label='Confirme seu E-mail'
                        />
                        <InputAdd
                            color={{color:"#000"}}
                            label='Data de Nascimento'
                        />
                        <InputAdd
                            color={{color:"#000"}}
                            label='CPF'
                        />
                        <InputAdd
                            color={{color:"#000"}}
                            label='Celular'
                        />
                    </View>
                </View>
                <ButtonNextBack onPress={()=>navigation.navigate('CreatePasswordScreen')}/>
            </View>
        </View>
    )
}