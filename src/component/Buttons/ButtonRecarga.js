import { Image, StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";

export default function ButtonRecarga(){
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={require('../../../assets/recarga.png')}/>
            <Text style={{fontWeight: 'bold' , color: '#fff'}}>RECARREGAR</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: 120,
        borderRadius: 10,
        backgroundColor: '#252525',
        alignItems: "center",
        justifyContent: "center",
        position: "relative",   
        bottom: 320,
    }
})