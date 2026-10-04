import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const { score } = useLocalSearchParams();
    const previousScore = Number(score) || 0;
    const addScore = (newScore: number) => {
        const totalScore = previousScore + newScore;
        router.push({ pathname: '/Q4', params: { score: String(totalScore) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#3/8" />
            <BodyText Body="누군가 너무 무례하게 행동한다면 나는 어떻게 대처 할거야?" />
            <View style={styles.wrapbtn}>
                <FromBtn text="조용히 주변을 살핀뒤에 차분하게 정리해" score={1} onPress={() => addScore(1)} />
                <FromBtn text="속상하지만 상대방도 이해해보려고 노력!!" score={2} onPress={() => addScore(2)} />
                <FromBtn text="할말은 해서 내 페이스를 지켜내는 STYLE 이야" score={4} onPress={() => addScore(4)} />
                <FromBtn text="재치있는 유머와 센스로 유연하게 대처~" score={3} onPress={() => addScore(3)} />
                <FromBtn text="'RUDE!' 당당하고 단호하게 내 생각을 명확히 전해!" score={5} onPress={() => addScore(5)} />
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