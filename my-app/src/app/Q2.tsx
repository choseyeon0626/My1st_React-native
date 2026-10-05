import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const { score } = useLocalSearchParams();
    const previousScore = Number(score) || 0;
    const addScore = (newScore: number) => {
        const totalScore = previousScore + newScore;
        router.push({ pathname: '/Q3', params: { score: String(totalScore) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#2/8" />
            <BodyText Body="'마법소녀'처럼 반짝반짝 빛나는 내 진짜 매력은 뭐야?" />
            <View style={styles.wrapbtn}>
                <FromBtn text="은은하게 풍겨지는 깊고 도도한 매력!!" score={1} onPress={() => addScore(1)} />
                <FromBtn text="무대 위 조명처럼 귀엽고 멋진 반전 매력을 보여줄 때!" score={5} onPress={() => addScore(5)} />
                <FromBtn text="당당한 나의 모습 스타일리시한 포인트로 주목 받을때!!" score={4} onPress={() => addScore(4)} />
                <FromBtn text="보기만 해도 달콤해~~ 다정한 에너지를 나눌때" score={2} onPress={() => addScore(2)} />
                <FromBtn text="밝은 친화력을 발휘하며 주변인들이 웃을때" score={3} onPress={() => addScore(3)} />
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