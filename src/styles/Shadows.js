import { Platform } from "react-native";

export const inputShadow = Platform.select({
    ios: {
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: -2 },
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    android: {
        elevation: 7,
        shadowColor: '#000',
    },
});

export const cardShadow = Platform.select({
    ios: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },
    android: {
        elevation: 20,
        shadowColor: '#000'
    }
})

export const ScrollShadow = Platform.select({
    ios: {
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        shadowColor: "rgb(0, 0, 0)",
        shadowOpacity: 0.25,
        borderRadius: 20

    },

    android: {
        shadowColor: "#000",
        elevation: 5,
    },
})