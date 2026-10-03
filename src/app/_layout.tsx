import {Stack} from "expo-router";
import FontProviders from "@/components/FontProvider";

export default function RootLayout() {
    return (
        <FontProviders>
            <Stack />
        </FontProviders>
    );
}