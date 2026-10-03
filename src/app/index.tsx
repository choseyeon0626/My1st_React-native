import { View, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
<<<<<<< HEAD
import { useVideoPlayer, VideoView } from 'expo-video';

=======
>>>>>>> 27f1d331f2e5488060d370f2327b2ef7d3cd959b
import Mybtn from "@/components/btn_md";
import Logo from "@/components/Logo";
import BodyText from "@/components/BodyText";

export default function HomeScreen() {
<<<<<<< HEAD

    const Player = useVideoPlayer(require('@/assets/video/ICONIC_HEART.mp4'),
        (player) => { player.loop = true; player.muted = true; player.play(); });

    return (
        <View style={styles.container}>
            <VideoView
                player={Player}
                style={styles.backgroundVideo}
                nativeControls={false}
                contentFit="cover"
            />
=======
    return (
        <View style={styles.container}>
            <Logo />
>>>>>>> 27f1d331f2e5488060d370f2327b2ef7d3cd959b
            <Stack.Screen options={{
                headerShown: false,
            }}
            />
<<<<<<< HEAD
            <Logo />
=======
>>>>>>> 27f1d331f2e5488060d370f2327b2ef7d3cd959b
            <BodyText Body="당신은 어떤 마법소녀일까요?" />
            <Mybtn title="시작하기" onPress={() => router.push('/start_from')} />
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
<<<<<<< HEAD
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
=======
>>>>>>> 27f1d331f2e5488060d370f2327b2ef7d3cd959b
});