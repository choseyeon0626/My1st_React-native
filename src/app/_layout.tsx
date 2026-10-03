import {Stack} from "expo-router";
import FontProviders from "@/components/FontProvider";
import { useAudioPlayer } from 'expo-audio';
import { useEffect } from "react";

export default function RootLayout() {
     const audioPlayer = useAudioPlayer(require('../../assets/audio/ICONIC_HEART.mp3')
            );
        
            useEffect(() => {
                audioPlayer.loop = true;
                audioPlayer.play();
            }, [audioPlayer]);
    return (
        <FontProviders>
            <Stack />
        </FontProviders>
    );
}