import { View,StyleSheet,Text } from 'react-native';
import Logoimg from '../../assets/images/logo.svg';
import { useFonts } from 'expo-font';

export default function Logo() {
  return (
    <View style={logoStyle.container}>
      <Logoimg width={100} height={100} />
      <Text style={logoStyle.text}>아이코닉 하트</Text>
    </View>
  );
}

export const logoStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'GraceSerif-Bold',
    color: '#444',
  },
});