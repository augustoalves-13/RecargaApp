import { StyleSheet, View  , Text, Image , TextInput} from "react-native"
import Animated, { Keyframe } from "react-native-reanimated"

function CardAdd({name , Number}){

    const keyframes = new Keyframe({
        from:{
            position: "absolute"
        },

        to:{
            position: "absolute",
            bottom: 300
        }
    })
    
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

export default CardAdd

const styles = StyleSheet.create({
        
    container:{
        height: 200,
        width: '80%',
        borderRadius: 20,
        backgroundColor: '#DCDDE2',
        paddingRight: 30,
        paddingBottom: 30,
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