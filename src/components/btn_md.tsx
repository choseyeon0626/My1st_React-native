import { Pressable, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

type MybtnText = {
    title: string;
};

export default function Mybtn({ title }: MybtnText) {
    return (
        <Pressable style={({ pressed }) => [
            styles.button, pressed && { backgroundColor: '#555' }
        ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 340,
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