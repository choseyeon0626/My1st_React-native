import { View, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import BodyText from "@/components/BodyText";
import FromBtn from "@/components/btn_from";

export default function HomeScreen() {
    const addScore = (score: number) => {
        router.push({ pathname: '/Q2', params: { score: String(score) } });
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <BodyText Body="#1/8" />
            <BodyText Body="'내 모험의 첫걸음을 디뎌' 꼭 이루고 싶은 꿈을 향해 달려갈 때 나는?"/>
            <View style={styles.wrapbtn}>
            <FromBtn text="망설임 없이 거침없이 직진!!" score={5} onPress={() => addScore(5)} />
            <FromBtn text="함께 나아가며 와벽하게 이뤄내는게 좋아" score={1} onPress={() => addScore(1)} />
            <FromBtn text="즐거움을 이길게 없다 즐겁게 즐기며 나아간다." score={2} onPress={() => addScore(2)} />
            <FromBtn text="목표을 FOCUS하고 묵묵히 노력하는 편" score={3} onPress={() => addScore(3)} />
            <FromBtn text="나만의 페이스를 만드는 것이 나의 STYLE" score={4} onPress={() => addScore(4)} />
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