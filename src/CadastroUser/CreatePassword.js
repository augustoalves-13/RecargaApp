import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PasswordInput from "../component/input/PasswordInput";
import ButtonNextBack from "../component/Buttons/ButtonNextBack";
import LogoLogin from "../component/Logo/LogoLogin";
import StylesComponent from "../styles/StylesComponent";

export default function CreatePassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [txtClass, setTxtClass] = useState([
    "gray",
    "gray",
    "gray",
    "gray",
    "gray",
  ]);

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const checkPassword = (passwordToCheck) => {
    const newTxtClass = [
      passwordToCheck.length >= 8 ? "green" : "red",
      /[A-Z]/.test(passwordToCheck) ? "green" : "red",
      /[a-z]/.test(passwordToCheck) ? "green" : "red",
      /[0-9]/.test(passwordToCheck) ? "green" : "red",
      /[%$#@!*&]/.test(passwordToCheck) ? "green" : "red",
    ];

    setTxtClass(newTxtClass);
  };

  const txt = [
    { id: 1, title: "A senha deve ter no mínimo 8 caracteres" },
    { id: 2, title: "A senha deve ter pelo menos uma letra maiúscula" },
    { id: 3, title: "A senha deve ter pelo menos uma letra minúscula" },
    { id: 4, title: "A senha deve ter pelo menos um número" },
    { id: 5, title: "A senha deve ter pelo menos um símbolo" },
  ];

  return (
    <View style={StylesComponent.container}>
      <View style={[StylesComponent.boxContent, { height: "100%" }]}>
        <View style={[StylesComponent.subContainer, { justifyContent: 'space-evenly', height: '63   %' }]}>
            <LogoLogin />
          <View style={{width: '100%' , alignItems: "center" , gap: 15}}>
            <PasswordInput
              label="Crie sua senha"
              value={password}
              onChangeText={checkPassword}
            />
            <PasswordInput
              label="Confirme sua senha"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
            <View>
              {txt.map((item, index) => (
                <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.circle, { backgroundColor: txtClass[index], borderColor: txtClass[index], }]}></View>
                  <Text style={{ ...styles.txt, color: txtClass[index] }}>{item.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <ButtonNextBack
          onPress={() => {
            if (password === confirmPassword && !txtClass.some((el) => el === "red")) {
              // Navegação para a próxima tela aqui
              navigation.navigate("ProximaTela"); // Substitua "ProximaTela" pelo nome da sua próxima tela
            } else {
              // Lógica para lidar com senhas inválidas
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    marginLeft: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 5,
    borderWidth: 2,
  },
});
