import { ReactNode } from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

type Props = {
    children: ReactNode;
};

export default function FontProviders({ children }: Props) {
    const [fontsLoaded] = useFonts({
        "GraceSerif-Regular": require("@/assets/fonts/GraceSerif-Regular.ttf"),
        "GraceSerif-Bold": require("@/assets/fonts/GraceSerif-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1 }}>
                <ActivityIndicator />
            </View>
        );
    }

    return <>{children}</>;
}