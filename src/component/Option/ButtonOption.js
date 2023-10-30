import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonOption({onPress , title}){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height:30,
        borderRadius: 10,
        elevation: 20,
        marginVertical: 2,
        width:60,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    }
})