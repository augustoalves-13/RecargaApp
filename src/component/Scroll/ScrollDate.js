import { StyleSheet } from "react-native"
import { ScrollView } from "react-native"
import { ScrollShadow } from "../../styles/Shadows"
import { View } from "react-native"
import { Month } from "../Arrays/Arrays"
import { Text } from "react-native"
import { Pressable } from "react-native"
import { useState } from "react"


const ScrollDate = ({onPress}) => {

    const [value , setValue] = useState()
    const [scrollPosition , setScrollPosition] = useState(0)

    const handleScroll = (event) =>{ 
        const position = event.nativeEvent.contentOffset.y
        setScrollPosition(position)
    }
 
    if(scrollPosition > 10){
        onPress('02')
    } else{
        onPress()
    }

    return (
        <ScrollView
            onScroll={handleScroll}
            style={[styles.scrollContainer, ScrollShadow]}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.scrollContent}>
                {Month.map((item, index) => (
                    <Pressable key={index} onPress={()=>onPress(item.mes)} style={styles.contentScroll}>
                        <Text style={{ color: '#606060', fontWeight: 'bold' }}>{item.mes}</Text>
                        <Text style={{ color: '#606060', fontWeight: 'bold' }}>{scrollPosition}</Text>
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
        alignItems: "center",
    },  

    contentScroll: {
        height: 45,
        width: '90%',
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})
export default ScrollDate