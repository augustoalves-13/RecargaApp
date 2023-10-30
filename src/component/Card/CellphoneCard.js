import { StyleSheet, Text, View, Image } from "react-native";

export default function CellphoneCard({ imageSource, title, number }) {
    return (
        <View style={styles.container}>
            <View style={styles.camera} />
            <View style={{ gap: 1
                      , alignItems: "center" }}>
                <Image source={imageSource} />
                <View style={{alignItems:"center"}}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: "700",
                        color: '#252525'
                    }}>{title}</Text>
                    <Text style={{
                        fontSize: 13,
                        fontWeight: "600",
                        color: '#252525'
                    }}>{number}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 248,
        borderRadius: 20,
        borderColor: "#2A3246",
        borderStyle: "solid",
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: -1,
        backgroundColor: '#fff'
    },

    camera: {
        height: 16,
        width: 80,
        backgroundColor: '#2A3246',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        position: "absolute",
        top: -1,
    }
})