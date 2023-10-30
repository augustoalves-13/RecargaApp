import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';


export default function MoreButton({ title, onPress, width, SvgImg }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { borderBottomWidth: width }]}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 10, justifyContent: 'space-between' }}>
                <View style={{alignItems: "center" , justifyContent: "center" , width: '10%'}}>
                    {SvgImg}
                </View>
                <View style={{ width: '80%', alignItems: "START", }}>
                    <Text style={{ color: '#606060', fontWeight: "bold", fontSize: 22, textAlign: "left" }}>{title}</Text>
                </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#606060" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '12%',
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderStyle: "solid",
        borderBottomColor: '#606060'
    },

    iconPreview: {
        height: 35,
        width: 35,
        borderRadius: 10,
        backgroundColor: '#D9D9D9'
    }
})