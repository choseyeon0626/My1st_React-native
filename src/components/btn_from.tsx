import { Pressable, Text, StyleSheet } from 'react-native';

type frombtnText = {
    text: string;
    score: number;
    onPress: (score: number) => void;
};

export default function FromBtn({ text, score, onPress }: frombtnText) {
    return (
        <Pressable style={({ pressed }) => [
            styles.button, pressed && { backgroundColor: '#555' }
        ]}
        onPress={() => onPress(score)}
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
<<<<<<< HEAD
        fontFamily: 'noto-sans-kr-regular',
        fontSize: 14,
=======
        fontFamily: 'GraceSerif-Bold',
        fontSize: 12,
>>>>>>> 27f1d331f2e5488060d370f2327b2ef7d3cd959b
    }
});