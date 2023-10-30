import { TextInput, TouchableOpacity, View } from "react-native";
import StylesComponent from "../../styles/StylesComponent";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { useState } from "react";
import { FontAwesome, Feather } from '@expo/vector-icons';
import SimpleText from "../../component/Textos/SimpleText";
import SetInput from "../../component/input/SetInput";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { inputShadow } from "../../styles/Shadows";


export default function PerfilScreen({ navigation }) {

    const [name, setName] = useState('Augusto Alves Pereira')

    const [email, setEmail] = useState('guto@uget.com.br')
    const [cpf, setCpf] = useState('445.674.658-06')
    const [telefone, setTelefone] = useState('(11) 93937-7708')
    const [isEditingName, setIsEditingName] = useState(false);

    const handleEditName = () => {
        setIsEditingName(true);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[StylesComponent.container, styles.container]}>
                <View style={{ height: '20%', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}    >
                    <View style={styles.userIcon}>
                        <FontAwesome name="user" size={50} color="#252525" />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        {isEditingName ? (
                            <TextInput
                                style={styles.nameText}
                                value={name}
                                onChangeText={setName}
                                onBlur={() => setIsEditingName(false)}
                                autoFocus
                            />
                        ) : (
                            <Text style={styles.nameText}>{name}</Text>
                        )}
                        <TouchableOpacity onPress={handleEditName}>
                            <Feather name="edit" size={24} color="#f8f8f8" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxContent}>
                    <View style={StylesComponent.subContainer}>
                        <SimpleText
                            title='Perfil'
                        />
                        <SetInput
                            value={email}
                            label='E-mail'
                        />
                        <SetInput
                            value={cpf}
                            label='CPF'
                        />
                        <SetInput
                            value={telefone}
                            label='Telefone'
                        />
                    </View>
                    <View style={[StylesComponent.buttonContainer, { height: 70, alignItems: "center", } , inputShadow]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.btnChangePass, { shadowColor: 'rgba(0.0.0.0)' }]}>
                            <Text style={{ color: '#f8f8f8', fontWeight: 'bold' }}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ChangePassScreen')} style={[styles.btnChangePass , inputShadow]}>
                            <Text style={{ color: '#f8f8f8', fontWeight: 'bold' }}>Mudar Senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        gap: 20,
    },


    boxContent: {
        height: '80%',
        backgroundColor: '#f8f8f8',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20
    },

    userIcon: {
        height: 80,
        width: 80,
        borderRadius: 60,
        backgroundColor: '#f8f8f8',
        alignItems: "center",
        justifyContent: 'flex-end',
    },

    nameText: {
        color: '#f8f8f8',
        fontWeight: '600',
        fontSize: 16
    },

    btnChangePass: {
        height: 45,
        width: 130,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#252525',
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 7,
        shadowOpacity: 1
    }
})