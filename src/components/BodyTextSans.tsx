import {Text, View, StyleSheet} from "react-native";
import { ReactNode } from "react"; 

type MybodyText = {
    Body: string;
};

export default function BodyText({ Body }: MybodyText) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ Body }</Text>
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
        fontFamily: 'NotoSansKR-Regular',
        textAlign: 'center',
        color: '#444',
    },
});