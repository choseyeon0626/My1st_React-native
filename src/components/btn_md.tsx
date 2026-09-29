import { Pressable, Text, StyleSheet } from 'react-native';

type MybtnText = {
    title: string;
};

export default function Mybtn({title}: MybtnText) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 240,
        padding: 15,
        borderRadius: 12,
        backgroundColor: '#222',
    },

    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    }
});