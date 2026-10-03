import { View, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import MybtnS from "@/components/btn_S";
import Logo from "@/components/Logo";
import BodyText from "@/components/BodyText";
import BodyTextSans from "@/components/BodyTextSans";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Logo />
            <Stack.Screen options={{
                headerShown: false,
            }}
            />

            <BodyTextSans Body="지금부터 나오는 8가지 질문에 원하는 답변을 골라주세요. 당신의 마음속의 'ICONIC HEART' 를 찾아보세요!" />

            <View style={styles.wrapbtn}>
                <MybtnS title="돌아가기" onPress={() => router.push('/')} />
                <MybtnS title="시작하기" onPress={() => router.push('/Q1')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 80,
        gap: 40,
    },
    wrapbtn: {
        flexDirection: "row",
        gap: 12,
    }
});