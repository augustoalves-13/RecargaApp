import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeTxt({onPress , title}){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight: "bold" , fontSize: 25,}}>{title}</Text>
            <TouchableOpacity onPress={onPress} style={styles.btn}>
                <Text style={{color: '#fff' , fontWeight: "bold"}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    btn:{
        height: 30,
        width: 30,
        backgroundColor: '#151515',
        borderRadius: 30, 
        alignItems: "center",
        justifyContent: "center",
    }


})