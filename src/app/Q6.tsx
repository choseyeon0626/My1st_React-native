import { View, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const addScore = (score: number) => {
        router.push({ pathname: '/Q7', params: { score: String(score) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#6/8" />
            <BodyText Body="같이 걷자 난 다 궁금해" />
            <View style={styles.wrapbtn}>
            <FromBtn text="이어폰 속 Playlist 뭐야 그 노래 뭔데" score={1} onPress={() => addScore(1)} />
            <FromBtn text="학교 끝남 뭐해 누구랑 친해 어떤 색 좋아" score={2} onPress={() => addScore(2)} />
            <FromBtn text="네 Style은 다 맞아 그게 너라서 더 좋아" score={3} onPress={() => addScore(3)} />
            <FromBtn text="느낌 알지 지금부터 1, 2, 3!" score={4} onPress={() => addScore(4)} />
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