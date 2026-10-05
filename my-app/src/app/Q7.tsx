import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const { score } = useLocalSearchParams();
    const previousScore = Number(score) || 0;
    const addScore = (newScore: number) => {
        const totalScore = previousScore + newScore;
        router.push({ pathname: '/Q8', params: { score: String(totalScore) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#7/8" />
            <BodyText Body="좋아하는 사람에게 내마음을 고백 할때 내방식은?" />
            <View style={styles.wrapbtn}>
                <FromBtn text="조용히 이야기를 들어주며 곁 지키기" score={1} onPress={() => addScore(1)} />
                <FromBtn text="오글거림 NO! 당돌한 직구로 솔직하게!" score={5} onPress={() => addScore(5)} />
                <FromBtn text="따뜻한 장문 메시지나 선물로 살포시!" score={2} onPress={() => addScore(2)} />
                <FromBtn text="귀여운 짤이나 유쾌한 말투로 친근하게!!" score={3} onPress={() => addScore(3)} />
                <FromBtn text="분명하게 정성을 담아서!!" score={4} onPress={() => addScore(4)} />
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