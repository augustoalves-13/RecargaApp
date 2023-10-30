import { StyleSheet, View  , Text, Image , TextInput} from "react-native"
import Animated, { Keyframe } from "react-native-reanimated"

function CardBu({name , Number}){

    return( 
        <Animated.View  style={styles.container}>
            <View>
                <Image style={styles.img} source={require('../../../assets/logo_bu.png')}/>
            </View>
            <View style={styles.content}>
                <Text  style={styles.text}>{name}</Text>
                <Text  style={styles.text}>{Number}</Text>
            </View>
        </Animated.View>
    )
}

export default CardBu

const styles = StyleSheet.create({
        
    container:{
        height: 180,
        width: 300,
        borderRadius: 20,
        backgroundColor: '#DCDDE2',
        paddingRight: 30,
        paddingBottom: 30,
        position: "absolute",
        top: '50%',
        right: '-31%',
        transform:[{translateX: -50} , {translateY:50}]
    },

    text:{
        color: '#000',
        opacity: 0.6
    },

    img:{
        height: 70,
        width: 70,
        opacity: 0.7,
    },

    content:{
        height: '50%',
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }

})