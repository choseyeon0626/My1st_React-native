import { View, StyleSheet } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";

import BodyText from "@/components/BodyText";
import BodyTextSans from "@/components/BodyTextSans";
import Mybtn from "@/components/btn_md";

export default function ResultScreen() {
    let result;

    const { score } = useLocalSearchParams();

    const totalScore = Number(score);

    if (totalScore >= 28) {
        result = {
            title: "당신은 마법소녀 '이안'입니다.",
            description: "이안은 용감하고 정의로운 성격을 가지고 있으며, 친구들을 위해 항상 최선을 다하는 마법소녀입니다.",
            video: require("@/assets/videos/IAN.mp4"),
        };
    } else if (totalScore >= 24) {
        result = {
            title: "당신은 마법소녀 '에이나'입니다.",
            description: "에이나는 지혜롭고 신중한 성격을 가지고 있으며, 문제를 해결하는 능력이 뛰어난 마법소녀입니다.",
            video: require("@/assets/videos/A_NA.mp4"),
        };
    } else if (totalScore >= 20) {
        result = {
            title: "당신은 마법소녀 '유하'입니다.",
            description: "유하는 활발하고 사교적인 성격을 가지고 있으며, 친구들과 함께하는 것을 좋아하는 마법소녀입니다.",
            video: require("@/assets/videos/YUHA.mp4"),
        };
    } else if (totalScore >= 16) {
        result = {
            title: "당신은 마법소녀 '카르멘'입니다.",
            description: "카르멘은 상냥하고 친절한 성격을 가지고 있으며, 주변 사람들을 배려하는 마음이 따뜻한 마법소녀입니다.",
            video: require("@/assets/videos/CARMEN.mp4"),
        };
    } else if (totalScore >= 12) {
        result = {
            title: "당신은 마법소녀 '지우'입니다.",
            description: "지우는 창의적이고 독창적인 성격을 가지고 있으며, 새로운 아이디어를 생각해내는 것을 즐기는 마법소녀입니다.",
            video: require("@/assets/videos/JIWOO.mp4"),
        };
    } else if (totalScore >= 8) {
        result = {
            title: "당신은 마법소녀 '주은'입니다.",
            description: "주은은 차분하고 신중한 성격을 가지고 있으며, 상황을 분석하고 계획을 세우는 능력이 뛰어난 마법소녀입니다.",
            video: require("@/assets/videos/JUUN.mp4"),
        };
    } else {
        result = {
            title: "당신은 마법소녀 '예온'입니다.",
            description: "예온은 활발하고 모험심이 강한 성격을 가지고 있으며, 새로운 도전을 즐기는 마법소녀입니다.",
            video: require("@/assets/videos/YEON.mp4"),
        };
    }

    const Player = useVideoPlayer(result.video, (player) => {
        player.loop = true;
        player.muted = true;
        player.play();
    });

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <VideoView
                style={styles.video}
                player={Player}
                contentFit="cover"
                nativeControls={false}
            />
            <BodyText Body={result.title} />
            <View style={styles.warpbottom}>
            <BodyTextSans Body={result.description} />
            <Mybtn title="다시 시작" onPress={() => router.push("/start_from")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingVertical: 80,
        gap: 40,
    },
    warpbottom: {
        alignItems: "center",
        gap: 20,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});