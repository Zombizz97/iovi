import {StyleSheet, ScrollView, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import React from "react";
import { useFonts } from 'expo-font';

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
    // Action à effectuer lorsqu'on appuie sur l'image (par exemple, ouvrir un lien)
    Linking.openURL('https://www.instagram.com/iovi_festival/');
  };

  return (
    <View style={styles.container2}>
        <ScrollView>
          <Text style={[styles.title, {alignSelf: 'center'}]}>{'\n'}Nos reseaux{'\n'}</Text>
          <View>
            <TouchableOpacity style={{alignSelf: 'flex-start', position: 'absolute', marginLeft: 100}}
                              onPress={handlePressInstagram}>
              <Image style={styles.image} source={require('../../assets/images/LOGO-INSTA.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 100, paddingTop: 1}}>
              <Image style={[styles.imageFacebook, {borderRadius: 13}]} source={require('../../assets/images/LOGO-FACEBOOK.png')}/>
            </TouchableOpacity>
            <Text>{'\n'}{'\n'}</Text>
          </View>
          <View style={styles.triangle}/>
          <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/LOGO-23.png')}/>
          </View>
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.dark.background
  },
  container2: {
    flex: 1,
    backgroundColor: '#FEF9F5',
  },
  title: {
    fontSize: 35,
    color: '#0F016A',
    fontFamily: 'AcierBatTextSolid'
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 5
  },
  imageFacebook: {
    width: 68,
    height: 68,
    alignSelf: 'center',
    marginTop: 5
  },
  triangle: {
    position: 'relative',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: Dimensions.get('window').width,
    borderLeftWidth: 0,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#0F016A',
  },
  button: {
    backgroundColor: Colors.dark.background,
    width: 80,
    height: 80
  },
  logo: {
    resizeMode: 'center',
    height: 100,
    width: '100%'
  },
});
