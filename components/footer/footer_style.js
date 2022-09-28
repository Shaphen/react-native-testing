import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerContainer: {
        flex: 0,
        marginVertical: 5,
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: "row",
        textAlign: "center",
    },
    footerText: {
        flex: 0,
        width: 40,
        fontSize: 10,
        fontWeight: "bold",
        flexDirection: "column",
        textAlign: "center",
        flexWrap: "wrap",
    },
});

export default styles;