import { Text, View, StyleSheet } from "react-native";
import { ReactNode } from "react";

type MybodyText = {
    Body: string;
};

export default function ResultTextTitle({ Body }: MybodyText) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{Body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 16,
        fontFamily: 'GraceSerif-Regular',
        textAlign: 'center',
        color: '#fff',
        textShadowColor: "rgba(0, 0, 0, 0.4)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
});