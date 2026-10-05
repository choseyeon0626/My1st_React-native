import { router, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

import Mybtn from "@/components/btn_md";
import Logo from "@/components/Logo";
import ResultTextTitle from "@/components/ResultTextTitle";
import { useVideoPlayer, VideoView } from "expo-video";

export default function HomeScreen() {
    const player = useVideoPlayer(
        require("@/assets/videos/ICONIC_HEART.mp4"),
        (player) => {
            player.loop = true;
            player.muted = true;
            player.play();
        }
    );
    return (
        <View style={styles.container}>


            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <VideoView
                player={player}
                style={styles.backgroundVideo}
                nativeControls={false}
                contentFit="cover"
            />
            <View style={styles.content}>
                <Logo />

                <ResultTextTitle Body="당신은 어떤 마법소녀일까요?" />

                <Mybtn
                    title="시작하기"
                    onPress={() => router.push("/start_from")}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    backgroundVideo: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    content: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 80,
    },
});