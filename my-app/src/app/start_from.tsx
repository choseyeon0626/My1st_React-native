import { View, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { BlurView } from "expo-blur";

import MybtnS from "@/components/btn_S";
import Logo from "@/components/Logo";
import RsultTextBody from "@/components/ResultTextBody";

export default function HomeScreen() {

    const player = useVideoPlayer(
        require("@/assets/videos/Mood_Sample.mp4"),
        (player) => {
            player.loop = true;
            player.muted = true;
            player.play();
        }
    );

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
            <VideoView
                player={player}
                style={styles.backgroundVideo}
                nativeControls={false}
                contentFit="cover"
            />
            <BlurView
                intensity={25}
                tint="light"
                style={styles.blur}
            />
            <View style={styles.overlay}></View>

            <Logo />

            <RsultTextBody Body="지금부터 나오는 8가지 질문에 원하는 답변을 골라주세요. 당신의 마음속의 'ICONIC HEART' 를 찾아보세요!" />

            <View style={styles.wrapbtn}>
                <MybtnS title="돌아가기" onPress={() => router.push('/')} />
                <MybtnS title="시작하기" onPress={() => router.push('/Q1')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 80,
        gap: 40,
    },

    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255,255,255,0.15)",
    },

    blur: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    wrapbtn: {
        flexDirection: "row",
        gap: 12,
    },

    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});