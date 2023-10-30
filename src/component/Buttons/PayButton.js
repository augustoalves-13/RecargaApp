import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function PayButton({title , onPress , SvgImg}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {SvgImg}
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>2% Tx. de Serviço</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '23%',
        width: '80%',
        borderWidth: 2,
        borderColor: '#252525',
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15, 
        gap: 15
    },

    viewIcon:{
        height: '65%',
        width: '15%',
        borderRadius: 10,
        backgroundColor: '#cacaca'
    },

    title:{
        fontWeight: "bold",
        fontSize: 16,
    },

    subTitle:{
        fontSize: 15
    },
})