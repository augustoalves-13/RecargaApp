import React, { useState } from 'react';
import { Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native';

const MoneyInput = ({ label , onChangeValue}) => {
    const [inputValue, setInputValue] = useState('0,00');

    const handleTextChange = (text) => {
        const numericText = text.replace(/[^0-9]/g, '');

        const paddedValue = numericText.padStart(3, '0');

        const reais = paddedValue.slice(0, -2);
        const centavos = paddedValue.slice(-2);

        const trimmedReais = reais.replace(/^0+/, '') || '0';

        const formattedValue = trimmedReais + ',' + centavos;

        setInputValue(formattedValue);

        ()=>onChangeValue(inputValue)
    };

    return (
        <View style={{ width: '100%', alignItems: "center", gap: 5 }}>
            <Text style={[{ color: 'rgba(0,0,0,0.4)', fontWeight: '600', fontSize: 16, width: '75%' }]}>{label}</Text>
            <TextInput
                value={'R$ '+inputValue}
                style={[styles.container, styles.centerTextVertically]}
                keyboardType="numeric"
                onChangeText={handleTextChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: '#f8f8f8',
        height: 40,
        borderRadius: 40,
        elevation: 7,
    },
    centerTextVertically: {
        textAlign: 'center',
    },
});

export default MoneyInput;
