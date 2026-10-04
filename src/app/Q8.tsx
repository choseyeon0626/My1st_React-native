import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const { score } = useLocalSearchParams();
    const previousScore = Number(score) || 0;
    const addScore = (newScore: number) => {
        const totalScore = previousScore + newScore;
        router.push({ pathname: '/result', params: { score: String(totalScore) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#8/8" />
            <BodyText Body="내가 무대에 선다면 나를 가장 빛낼 컨셉은?" />
            <View style={styles.wrapbtn}>
                <FromBtn text="당당하고 강렬한 걸크러시 퍼포먼스" score={5} onPress={() => addScore(5)} />
                <FromBtn text="힙하고 세련된 트렌디 컨셉" score={1} onPress={() => addScore(1)} />
                <FromBtn text="몽환적이고 감성적인 보컬 라인 컨셉" score={2} onPress={() => addScore(2)} />
                <FromBtn text="톡톡 튀는 하이틴 & 청량 컨셉" score={3} onPress={() => addScore(3)} />
                <FromBtn text="신비롭고 깊은 서사의 세계관 컨셉" score={4} onPress={() => addScore(4)} />
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