import { StyleSheet } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { Path, Svg } from "react-native-svg";
import { inputShadow } from "../../styles/Shadows";

export default function WhtButton({title , SvgImg , onPress}) {


    return (
        <TouchableOpacity onPress={onPress} style={[styles.editButton  , inputShadow]}>
            {SvgImg}
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    editButton: {
        width: 200,
        height: 45,
        borderColor: '#252525',
        borderWidth: 2,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
        elevation: 7,
        shadowColor: "rgba(0, 0, 0 ,0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 7,
        shadowOpacity: 1,
        backgroundColor: '#f8f8f8',
    }
})