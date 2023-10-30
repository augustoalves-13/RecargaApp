import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function CotaButton({title , min , max , onPress , SvgImg}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {SvgImg}
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>V min {min} - V max {max}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '33%',
        width: '80%',
        borderWidth: 2,
        borderColor: '#252525',
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10, 
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