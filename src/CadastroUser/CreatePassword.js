import { View, Text, Button } from "react-native";
import StylesComponent from "../styles/StylesComponent";
import LogoLogin from "../component/Logo/LogoLogin";
import { StyleSheet } from "react-native";
import PasswordInput from "../component/input/PasswordInput";
import React, { useState } from "react";
import ButtonNextBack from "../component/Buttons/ButtonNextBack";

export default function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [verificationResult, setVerificationResult] = useState("");
  const [classe , setClasse] = useState('')

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const checkPassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[%-&-!]).{8,}$/;

    if (password === confirmPassword) {
      if (password.match(passwordRegex)) {
        setPasswordError("");
        setClasse("correct")
        setVerificationResult("Senha válida. Sucesso!");
      } else {
        setPasswordError(
          "A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula e uma letra minúscula."
        );
        setClasse("erro")
        setVerificationResult("Erro na senha.");
      }
    } else {
      setPasswordError("As senhas não coincidem.");
      setVerificationResult("Erro na senha.");
    }
  };

  const txt = [ 
    {id: 1, title: 'A senha deve ter no mínimo 8 caracteres' , value: ''},
    {id: 2, title: 'A senha deve ter pelo menos uma letra maiúscula', value: ''},
    {id: 3, title: 'A senha deve ter pelo menos uma letra minúscula', value: ''},
    {id: 4, title: 'A senha deve ter pelo menos um número', value: ''},
    {id: 5, title: 'A senha deve ter pelo menos um símbolo', value: ''},
  ]

  return (
    <View style={StylesComponent.container}>
      <View style={[StylesComponent.boxContent, { height: "100%" }]}>
        <View style={StylesComponent.subContainer}>
          <LogoLogin />
          <View style={styles.contentInput}>
            <PasswordInput
              bool={false}
              label="Crie sua senha"
              value={password}
              onChangeText={handlePasswordChange}
            />
            <PasswordInput
              bool={false}
              label="Confirme sua senha"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
           
            <View>
              {txt.map((item) => (
                <View key={item.id}>
                  <View></View>
                  <Text style={styles[classe]}>{item.title}</Text>
                </View>
              ))}  
            </View>  
          </View>
        </View>
        <ButtonNextBack
          onPress={checkPassword}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentInput: {
    width: "100%",
    gap: 15,
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
'correct': {
    color: "green",
  },

  'erro':{
    color: '#ff0000'
  }
});
