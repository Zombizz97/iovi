import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { Text } from '../../components/Themed';
import React from "react";
import { useFonts } from 'expo-font';
import Footer from "../include/footer";
import IndexCarousel from "../include/carousel";
import styles from "../../assets/style/styleSheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import firebase from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";

export default function TabOneScreen() {
  const [fontsLoaded] = useFonts({
    "AcierBatTextOutline": require("../../assets/fonts/AcierBatText-Outline.otf"),
    "AcierBatTextSolid": require("../../assets/fonts/AcierBatText-Solid.otf"),
    "Inter": require("../../assets/fonts/Inter.otf"),
  });

  console.log('test');
  const addDataToFirestore = async () => {
    try {
      await firebase.firestore().collection('test').add({ message: 'Test message'});
      console.log('Data added');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  // Lire des données depuis Firestore
  const readDataFromFirestore = async () => {
    try {
      const snapshot = await firebase.firestore().collection('test').get();
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    } catch (error) {
      console.error('Error reading data from Firestore:', error);
    }
  };


  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[styles.container]}>
        <TouchableOpacity onPress={addDataToFirestore}>
          <Text>ADD DATA</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text style={[styles.text, styles.sideText]}>
            ICI{'\n'}RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
          </Text>
          <Image style={styles.image} source={require('../../assets/images/place_holder.png')} />
          <View style={styles.ridesFriends}>
            <View style={styles.verticaleLine}/>
              <Text style={[styles.text, {marginTop: hp('3%')}]}>
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
            <Text style={[styles.title, styles.sideText, {marginTop: hp('3%')}]}>
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

          <Text style={[styles.title2 , {marginTop: hp('8%')}]}>  Au Programme...   </Text>
          <Text style={[styles.text, styles.sideText, {textAlign: 'center'}]}>Découvre les différents ateliers, scènes et conférences de la journée basés autour de l'audiovisuel</Text>
          <IndexCarousel isAtelier={false}/>
          <View style={{paddingBottom: hp('15%')}}/>
          <View style={{height: 1, backgroundColor: '#0F016A'}} />
          <View style={styles.triangle}/>
          <View style={[styles.container2,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }]}>
            <Image style={styles.imageRight} source={require('../../assets/images/LOGO-31-250.png')} />
            <Image style={styles.imageHachure} source={require('../../assets/images/HACHURE.png')}/>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title3}>Participe en votant tout au long de ta journee</Text>
            <Text style={[styles.text2, styles.sideText]}>
              Choisie l'atelier pour lequel tu as envie de voté et lâche ta meilleure analyse !
            </Text>
            <Image style={styles.image} source={require('../../assets/images/place_holder.png')} />
            <TouchableOpacity style={[styles.button, {marginTop: hp('5%')}]}>
              <Text style={styles.textButton}>Je vote</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reverseTriangle} />
          <Text style={[styles.title2, styles.sideText, {marginTop: hp('12%')}]}>+D'info?</Text>
          <View>
            <View style={[styles.verticaleLine, {position: 'relative', marginLeft: wp('7%')}]}/>
            <Text style={[styles.text, {position: 'absolute', marginLeft: wp('15%'), marginTop: hp('4%')}]}>
              ICI RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
            </Text>
            <Text style={[styles.text, {position: 'absolute', marginLeft: wp('23%'), marginTop: hp('21%')}]}>
              REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
            </Text>
            <Text style={[styles.text, {position: 'absolute', marginLeft: wp('34%'), marginTop: hp('48%')}]}>
              REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
            </Text>
          </View>
          <Image source={require('../../assets/images/LOGO-38-HALF.png')}/>
          <View>
            <View style={[styles.verticaleLine, {position: 'relative', marginLeft: wp('7%'), marginBottom: hp('12%')}]}/>
            <Text style={[styles.text, {position: 'absolute', marginLeft: wp('23%'), marginTop: hp('1%')}]}>
              ICI RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
            </Text>
            <Text style={[styles.text, {position: 'absolute', marginLeft: wp('15%'), marginTop: hp('20%')}]}>
              REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
            </Text>
          </View>
          <Footer/>
        </ScrollView>
    </View>
  );
}
