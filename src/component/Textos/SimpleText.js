import { StyleSheet, Text, View } from "react-native";

export default function SimpleText({title, subTxt}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subTxt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    gap: 5,
    width: '75%',
    paddingTop: 40,
    alignItems: "start",
   },

   title:{
    fontSize: 25,
    fontWeight: "bold",
   },

   subTxt:{
    fontWeight: 500,
   }
} )