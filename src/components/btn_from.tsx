import { Pressable, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

type frombtnText = {
    text: string;
};

export default function FromBtn({ text }: frombtnText) {
    return (
        <Pressable style={({ pressed }) => [
            styles.button, pressed && { backgroundColor: '#555' }
        ]}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 340,
        paddingVertical: 16 ,
        borderRadius: 12,
        backgroundColor: '#Fff',
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },

    text: {
        color: '#444',
        textAlign: 'center',
        fontFamily: 'GraceSerif-Bold',
        fontSize: 12,
    }
});