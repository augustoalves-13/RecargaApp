import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function MoreViews({ img, title, txt }) {
    return (
        <View style={styles.container}>
            {img}            
            <View>
                <Text style={{fontSize: 20 , fontWeight: '900' , color: '#606060'}}>{title}</Text>
                <Text style={{fontSize: 15 , fontWeight: '600' , color: '#606060' , width: '60%'}}>{txt}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '21%',
        width: '100%',
        borderColor: '#606060',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center"
    },

})