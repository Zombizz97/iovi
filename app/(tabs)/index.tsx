import {StyleSheet, ScrollView, View, Image, Dimensions, TouchableOpacity} from 'react-native';

import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import React from "react";
import { Outline } from "../../assets/fonts/outline"


export default function TabOneScreen() {

  return (
    <View style={[styles.container]}>
        <ScrollView>
          <Text style={[styles.text, styles.sideText]}>
            ICI{'\n'}RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
          </Text>
          <Image style={styles.image} source={require('../../assets/images/place_holder.png')} />
          <View style={styles.ridesFriends}>
            <View style={styles.verticaleLine}></View>
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
              TU VEUX DÉCOUVRIR{'\n'}
              L'AUD<Outline text='IOVI'/>SUEL OU{'\n'}
              PARTICIPER A UN{'\n'}
              TRUC COOL ?
            </Text>
            <Text style={[styles.text2, styles.sideText]}>
              Viens découvrir IOVI festival ! Au programme de la journée des projections, des salles pour prendre tes meilleurs photos, une remise de prix, des ateliers et encore plein d'autres choses..
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.text}>Je m'inscris</Text>
          </TouchableOpacity>

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
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
    marginBottom: 55
  },
  text2: {
    fontSize: 20,
    marginBottom: 55,
    color: '#0F016A'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0F016A'
  },
  sideText: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: 10,
    padding: 25,
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: 'center'
  },
  ridesFriends: {
    paddingTop: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  verticaleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#fff',
  },
  triangle: {
    position: 'relative',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderLeftWidth: Dimensions.get('window').width,
    borderRightWidth: 0,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
  },
});
