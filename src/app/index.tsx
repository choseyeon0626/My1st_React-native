import { View, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import Mybtn from "@/components/btn_md";
import Logo from "@/components/Logo";
import BodyText from "@/components/BodyText";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Logo />
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="당신은 어떤 마법소녀일까요?" />
            <Mybtn title="시작하기" onPress={() => router.push('/start_from')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingVertical: 80,
        gap: 40,
    },
});