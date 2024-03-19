import {View, Image, TouchableOpacity, Linking } from 'react-native';

import { Text } from '../../components/Themed';
import React from "react";
import { useFonts } from 'expo-font';
import styles from "../../assets/style/styleSheet";

export default function Footer() {
  const [fontsLoaded] = useFonts({
    "AcierBatTextOutline": require("../../assets/fonts/AcierBatText-Outline.otf"),
    "AcierBatTextSolid": require("../../assets/fonts/AcierBatText-Solid.otf"),
    "Inter": require("../../assets/fonts/Inter.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const handlePressInstagram = () => {
    Linking.openURL('https://www.instagram.com/iovi_festival/');
  };

  return (
    <View style={styles.container2}>
      <Text style={[styles.title, {alignSelf: 'center'}]}>{'\n'}Nos reseaux{'\n'}</Text>
        <View>
          <TouchableOpacity style={{alignSelf: 'flex-start', position: 'absolute', marginLeft: 100}}
                            onPress={handlePressInstagram}>
            <Image style={styles.imageInsta} source={require('../../assets/images/LOGO-INSTA.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 100, paddingTop: 1}}>
            <Image style={[styles.imageFacebook, {borderRadius: 13}]} source={require('../../assets/images/LOGO-FACEBOOK.png')}/>
          </TouchableOpacity>
          <Text>{'\n'}{'\n'}</Text>
        </View>
      <View style={styles.triangleWhite}/>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/images/LOGO-23.png')}/>
      </View>
    </View>
  );
}
