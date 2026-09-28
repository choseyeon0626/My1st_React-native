import { View, StyleSheet } from "react-native";
import Mybtn from "@/components/btn_md";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Mybtn title="hello Would"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});