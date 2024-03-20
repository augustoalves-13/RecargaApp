import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import StylesComponent from '../../styles/StylesComponent';
import CardAdd from '../../component/Card/CardAdd';
import CardBu from '../../component/Card/CardBu';
import SimpleText from '../../component/Textos/SimpleText';
import HomeButton from '../../component/Buttons/HomeButton';
import { Circle, Path, Svg } from 'react-native-svg';
import CardPayment from '../More/PaymentConfig/SetCardsPayment';
import PayCardSucess from '../../animatedComponents/PayCardSuccess';

export default function SuccessFullScreen({ route }) {

    const { nome, number , type , flag , image , color} = route.params

    const animatedHeight = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedHeight, {
            toValue: 0.7,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <View style={StylesComponent.container}>
            <View style={[StylesComponent.boxContent, { justifyContent: 'flex-end' }]}>
                <View style={[StylesComponent.subContainer, { justifyContent: 'space-between' }]}>
                    {type === 'bilhete' &&
                        <SimpleText
                            title='Adicionar Bilhetes'
                            subTxt='Seu bilhete foi adicionado com sucesso'
                        />
                    }
                    {type === 'PayCardTrash' && 
                        <SimpleText
                            title='Pagamentos'
                            subTxt='Cartão excluído de sua carteira com sucesso'
                        />
                    }
                    <Animated.View
                        style={[
                            styles.animatedContainer,
                            { height: animatedHeight.interpolate({ inputRange: [0, 0.9], outputRange: ['0%', '90%'] }), justifyContent: 'flex-start', paddingTop: 30, gap: 15 },
                        ]}
                    >
                        <Text style={{ fontSize: 22, color: '#fff' }}>Sucesso!</Text>
                        <Svg style={styles.group54} width="88" height="88" viewBox="0 0 88 88" fill="none" >
                            <Circle cx="44" cy="44" r="42.5" stroke="white" strokeWidth="3" />
                            <Path d="M23 43L39.5 65.5L52.5 43.75L65.5 22" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>

                        {type === 'bilhete' && 
                            <CardBu
                                Number={number}
                                name={nome}
                            />
                        }
                        {type === 'PayCardTrash'&& 
                            <PayCardSucess
                                color={color}
                                Image={image}
                                flag={flag}
                                number={number}
                                name={nome}
                            />
                        }
                    </Animated.View>
                    <HomeButton />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    animatedContainer: {
        backgroundColor: '#47B520',
        width: '60%',
        borderRadius: 20,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
