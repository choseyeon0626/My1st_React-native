import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const { score } = useLocalSearchParams();
    const previousScore = Number(score) || 0;
    const addScore = (newScore: number) => {
        const totalScore = previousScore + newScore;
        router.push({ pathname: '/Q7', params: { score: String(totalScore) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#6/8" />
            <BodyText Body="중요한 무대나 시험을 앞두고 다잡는 내 주문은?" />
            <View style={styles.wrapbtn}>
                <FromBtn text="함께니까 괜찮아! 집중해서 잘 해내자" score={1} onPress={() => addScore(1)} />
                <FromBtn text="차분하게!! 나 자신을 믿어" score={2} onPress={() => addScore(2)} />
                <FromBtn text="재밌게 즐기자! 즐기는 사람이 이기는 거야~" score={3} onPress={() => addScore(3)} />
                <FromBtn text="연습한 만큼 다 보여주고 오자!" score={4} onPress={() => addScore(4)} />
                <FromBtn text="내가 최고지! 오늘 완전 다 찢고 온다!" score={5} onPress={() => addScore(5)} />
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