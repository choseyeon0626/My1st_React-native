import { View, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";
import MyBtn from "@/components/btn_md";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#2/8" />
            <BodyText Body="I cannot focus on anything but you baby I cannot focus on" />
            <View style={styles.wrapbtn}>
                <FromBtn text="초점 뒤의 흐릿한" />
                <FromBtn text="반투명한 My view baby" />
                <FromBtn text="I cannot focus on anything," />
                <FromBtn text="on anyone but you" />
                <MyBtn title="다음" onPress={() => router.push('/from')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingVertical: 80,
        gap: 40,
    },
    wrapbtn: {
        gap: 12,
    }
});