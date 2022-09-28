import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerContainer: {
        flex: 0,
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: "row",
        textAlign: "center",
        marginBottom: 10,
        marginTop: -10,
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