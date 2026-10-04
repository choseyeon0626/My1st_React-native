import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const { score } = useLocalSearchParams();
    const previousScore = Number(score) || 0;
    const addScore = (newScore: number) => {
        const totalScore = previousScore + newScore;
        router.push({ pathname: '/Q6', params: { score: String(totalScore) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#5/8" />
            <BodyText Body="다 함께 게임을 하며 놀때 내가 맡는 역할은?" />
            <View style={styles.wrapbtn}>
                <FromBtn text="흐름을 파악해 승리로 이끄는 브레인" score={1} onPress={() => addScore(1)} />
                <FromBtn text="룰을 지키며 내 페이스 대로 플레이" score={2} onPress={() => addScore(2)} />
                <FromBtn text="리액션 폭발! 웃음을 담당하는 분위기 메이커" score={3} onPress={() => addScore(3)} />
                <FromBtn text="승부욕 폭발! 화려한 입담으로 판을 지배하는 타입" score={5} onPress={() => addScore(5)} />
                <FromBtn text="열정 만렙! 지고는 못 사는 행동파" score={4} onPress={() => addScore(4)} />
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