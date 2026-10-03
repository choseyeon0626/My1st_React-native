import {Stack} from "expo-router";
import FontProviders from "@/components/FontProvider";
<<<<<<< HEAD
import { useAudioPlayer } from 'expo-audio';
import { useEffect } from "react";

export default function RootLayout() {
     const audioPlayer = useAudioPlayer(require('../../assets/audio/ICONIC_HEART.mp3')
            );
        
            useEffect(() => {
                audioPlayer.loop = true;
                audioPlayer.play();
            }, [audioPlayer]);
=======

export default function RootLayout() {
>>>>>>> 27f1d331f2e5488060d370f2327b2ef7d3cd959b
    return (
        <FontProviders>
            <Stack />
        </FontProviders>
    );
}