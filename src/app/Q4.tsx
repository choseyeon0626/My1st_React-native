import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const { score } = useLocalSearchParams();
    const previousScore = Number(score) || 0;
    const addScore = (newScore: number) => {
        const totalScore = previousScore + newScore;
        router.push({ pathname: '/Q5', params: { score: String(totalScore) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#4/8" />
            <BodyText Body="뜨거운 계절을 견디기 위한 나만의 힐링 방식은?" />
            <View style={styles.wrapbtn}>
                <FromBtn text="아늑하고 정돈된 공간에서 편안하게 혼자 쉬기" score={1} onPress={() => addScore(1)} />
                <FromBtn text="좋아하는 감성 음악을 들으며 조용히 산책하기!" score={2} onPress={() => addScore(2)} />
                <FromBtn text="장난과 티키타카로 신나게 기분 전환하기!" score={5} onPress={() => addScore(5)} />
                <FromBtn text="맛있는 디저트를 먹으며 친한 친구들과 신나게 수다 떨기!" score={3} onPress={() => addScore(3)} />
                <FromBtn text="핫플 탐방이나 활동적인 취미로 시원하게 기분 전환하기!" score={4} onPress={() => addScore(4)} />
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