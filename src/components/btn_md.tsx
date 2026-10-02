import React, {useRef} from 'react';
import { Pressable, Text, StyleSheet, Animated } from 'react-native';

type MybtnText = {
    title: string;
};

export default function Mybtn({ title }: MybtnText) {
    const colorAnim = useRef(new Animated.Value(0)).current;
    const boxColor = colorAnim.interpolate({
        inputRange: [0,1],
        outputRange: ['#000000','#444444'],
    })
    const handlePress = () => {
        alert('버튼이 클릭 되었습니다.')
    }


    return (
        <view>
        <Pressable style={styles.button} onPress={handlePress} onPressIn={handlePressIn} onPressOut={handlePressout}>
            <Animated.View>
            <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </Pressable>
        </view>
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