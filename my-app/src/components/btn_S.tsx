import { Pressable, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

type MybtnText = {
    title: string;
    onPress: () => void;
};

export default function MybtnS({ title, onPress }: MybtnText) {
    return (
        <Pressable style={({ pressed }) => [
            styles.button, pressed && { backgroundColor: '#555' }
        ]}
        onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 160,
        paddingVertical: 16 ,
        borderRadius: 12,
        backgroundColor: '#A9DAF9',
        alignItems: 'center',
    },

    text: {
        color: '#444',
        textAlign: 'center',
        fontFamily: 'GraceSerif-Bold',
        fontSize: 14,
    }
});