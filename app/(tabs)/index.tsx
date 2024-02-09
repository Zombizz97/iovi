import {StyleSheet, ScrollView, View, Image, Dimensions, TouchableOpacity} from 'react-native';

import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import React from "react";
import { useFonts } from 'expo-font';
import Footer from "../include/footer";
import IndexCarousel from "../include/carousel";

export default function TabOneScreen() {
  const [fontsLoaded] = useFonts({
    "AcierBatTextOutline": require("../../assets/fonts/AcierBatText-Outline.otf"),
    "AcierBatTextSolid": require("../../assets/fonts/AcierBatText-Solid.otf"),
    "Inter": require("../../assets/fonts/Inter.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.container]}>
        <ScrollView>
          <Text style={[styles.text, styles.sideText]}>
            ICI{'\n'}RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
          </Text>
          <Image style={styles.image} source={require('../../assets/images/place_holder.png')} />
          <View style={styles.ridesFriends}>
            <View style={styles.verticaleLine}/>
              <Text style={[styles.text, {marginTop: 20, marginLeft: 40}]}>
                ICI{'\n'}RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE{'\n'}DE 9H00 A 20H30
              </Text>
          </View>

          <View style={styles.triangle}/>
          <View style={styles.container2}>
            <Text style={[styles.title, styles.sideText, {marginTop: 20}]}>
              TU VEUX DECOUVRIR{'\n'}
              L'AUD
            <Text style={styles.titleOutline}>IOVI</Text>
              SUEL OU{'\n'}
              PARTICIPER A UN{'\n'}
              TRUC COOL ?
            </Text>
            <Text style={[styles.text2, styles.sideText]}>
              Viens découvrir IOVI festival ! Au programme de la journée des projections, des salles pour prendre tes meilleurs photos, une remise de prix, des ateliers et encore plein d'autres choses..
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Je m'inscris</Text>
            </TouchableOpacity>
            <Image style={styles.image2} source={require('../../assets/images/place_holder.png')} />
            <Image style={styles.imageHachureCenter} source={require('../../assets/images/HACHURE.png')}/>
            <View style={styles.topHalf}>
              <Image style={styles.halfImage} source={require('../../assets/images/LOGO-31.png')} />
            </View>
          </View>

          <Text style={[styles.title2 , {marginTop: 75}]}>  Au Programme...   </Text>
          <Text style={[styles.text, styles.sideText, {textAlign: 'center'}]}>Découvre les différents ateliers, scènes et conférences de la journée basés autour de l'audiovisuel</Text>
          <IndexCarousel/>
          <View style={{paddingBottom: 100}}/>
          <View style={styles.triangle}/>
          <View style={[styles.container2,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }]}>
            <Image style={styles.imageLeft} source={require('../../assets/images/LOGO-31-250.png')} />
            <Image style={styles.imageHachure} source={require('../../assets/images/HACHURE.png')}/>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title3}>Participe en votant tout au long de ta journee</Text>
            <Text style={[styles.text2, styles.sideText]}>
              Choisie l'atelier pour lequel tu as envie de voté et lâche ta meilleure analyse !
            </Text>
            <Image style={styles.image} source={require('../../assets/images/place_holder.png')} />
            <TouchableOpacity style={[styles.button, {marginTop: 45}]}>
              <Text style={styles.textButton}>Je vote</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reverseTriangle} />
          <Text style={[styles.title2, styles.sideText, {marginTop: 100}]}>+D'info?{'\n'}</Text>
          <View>
            <View style={[styles.verticaleLine, {position: 'relative', marginLeft: 15}]}/>
            <Text style={[styles.text, {position: 'absolute', marginLeft: 35, marginTop: 35}]}>
              ICI RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
            </Text>
            <Text style={[styles.text, {position: 'absolute', marginLeft: 95, marginTop: 180}]}>
              REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
            </Text>
            <Text style={[styles.text, {position: 'absolute', marginLeft: 150, marginTop: 375}]}>
              REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
            </Text>
          </View>
          <Image source={require('../../assets/images/LOGO-38-HALF.png')}/>
          <View>
            <View style={[styles.verticaleLine, {position: 'relative', marginLeft: 15, marginBottom: 100}]}/>
            <Text style={[styles.text, {position: 'absolute', marginLeft: 95, marginTop: 35}]}>
              ICI RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
            </Text>
            <Text style={[styles.text, {position: 'absolute', marginLeft: 35, marginTop: 180}]}>
              REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
            </Text>
          </View>
          <Footer/>
        </ScrollView>
    </View>
  );
}
const {width, height} = Dimensions.get('window');
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
  text: {
    fontSize: 20,
    marginBottom: 55,
    color: '#FEF9F5',
    fontFamily: 'Inter'
  },
  text2: {
    fontSize: 20,
    marginBottom: 55,
    color: '#0F016A',
    fontFamily: 'Inter'
  },
  title: {
    fontSize: 35,
    color: '#0F016A',
    fontFamily: 'AcierBatTextSolid'
  },
  titleOutline: {
    fontSize: 35,
    color: '#0F016A',
    fontFamily: 'AcierBatTextOutline'
  },
  title2: {
    fontSize: 40,
    alignSelf: 'center',
    color: '#FEF9F5',
    fontFamily: 'AcierBatTextSolid'
  },
  title3: {
    fontSize: 40,
    fontFamily: 'AcierBatTextOutline',
    color: '#0F016A',
    paddingLeft: 25,
    paddingTop: 20
  },
  sideText: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: 10,
    padding: 20,
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: 'center'
  },
  image2: {
    width: 386,
    height: 386,
    marginLeft: 25,
    marginTop: 25
  },
  ridesFriends: {
    paddingTop: 70,
    alignItems: "flex-end",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  verticaleLine: {
    height: 300,
    width: 1,
    backgroundColor: '#FEF9F5',
  },
  triangle: {
    position: 'relative',
    borderLeftWidth: Dimensions.get('window').width,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FEF9F5',
  },
  reverseTriangle: {
    position: 'relative',
    borderRightWidth: Dimensions.get('window').width,
    borderTopWidth: 60,
    borderRightColor: 'transparent',
    borderTopColor: '#FEF9F5',
  },
  button: {
    marginLeft: 25,
    backgroundColor: Colors.dark.background,
    alignItems: 'center',
    width: 175,
    height: 50
  },
  textButton: {
    fontSize: 20,
    paddingTop: 8,
    fontFamily: 'Inter'
  },
  halfImage: {
    width: width,
    height: height / 2,
  },
  topHalf: {
    width: width,
    height: height / 4,
    overflow: 'hidden',
  },
  imageLeft: {
    width: 125,
    height: 125,
    marginLeft: "auto",
    marginRight: 20
  },
  imageHachure: {
    width: 150,
    height: 250,
    resizeMode: "cover",
    position: 'absolute',
    bottom: 60,
    zIndex: -1,
  },
  imageHachureCenter: {
    width: 250,
    height: 150,
    resizeMode: "cover",
    position: 'absolute',
    bottom: 150,
    zIndex: -1,
    alignSelf: 'center'
  },
  temp: {
    fontFamily: 'AcierBatTextSolid',
    color: 'red',
    fontSize: 50,
    alignSelf: 'center'
  }
});
