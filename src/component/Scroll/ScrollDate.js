import { StyleSheet } from "react-native"
import { ScrollView } from "react-native"
import { ScrollShadow } from "../../styles/Shadows"
import { View } from "react-native"
import { Month } from "../Arrays/Arrays"
import { Text } from "react-native"
import { Pressable } from "react-native"


const ScrollDate = ({onPress}) => {



    return (
        <ScrollView
            style={[styles.scrollContainer, ScrollShadow]}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.scrollContent}>
                {Month.map((item, index) => (
                    <Pressable onPress={onPress} style={styles.contentScroll}>
                        <Text key={index} style={{ color: '#606060', fontWeight: 'bold' }}>{item.mes}</Text>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scrollContainer: {
        width: 150,
        height: 170,
        borderRadius: 20,
        backgroundColor: '#f8f8f8',
        position: 'absolute',
        top: '15%',
        zIndex: 2,
    },

    scrollContent:{
        alignItems: "center"
    },  

    contentScroll: {
        height: 45,
        width: '90%',
        justifyContent: "center"
    }
})
export default ScrollDate