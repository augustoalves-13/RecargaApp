import { StyleSheet } from "react-native";

const StylesComponent = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#252525',
        justifyContent: 'flex-end'
    },

    boxContentHome: {        
        paddingVertical: 20,
        paddingTop: 40,
        justifyContent: 'space-between',
        alignItems: "center",
        height: '88%',
        backgroundColor: '#f8f8f8',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },

    container: {
        flex: 1,
        backgroundColor: '#252525',
        justifyContent: 'flex-end'
    },

    boxContent: {
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: "center",
        height: '93 %',
        backgroundColor: '#f8f8f8',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },


    subContainer: {
        width: '100%',
        alignItems: "center",
        gap: 30
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 40
    },


    buttons: {
        height: 45,
        width: 120,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },


    txtSecondary:{
        color: '#f8f8f8', 
        fontWeight: "bold" 
    },

    txtPrimary:{
        color: '#252525', 
        fontWeight: "bold" 
    }
})

export default StylesComponent