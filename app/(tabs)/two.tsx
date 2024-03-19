import {StyleSheet, ScrollView, View, Image, Dimensions} from 'react-native';

import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import React from "react";
import { useFonts } from 'expo-font';
import Footer from "../include/footer";
import IndexCarousel from "../include/carousel";

export default function TabTwoScreen() {
  const [fontsLoaded] = useFonts({
    "AcierBatTextOutline": require("../../assets/fonts/AcierBatText-Outline.otf"),
    "AcierBatTextSolid": require("../../assets/fonts/AcierBatText-Solid.otf"),
    "Inter": require("../../assets/fonts/Inter.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
      <View style={[styles.container2]}>
        <ScrollView>
          <Text style={[styles.title, styles.sideText]}>
            AU PROGRAMME DE 17H A 20H30
          </Text>
          <View style={styles.rectangularContainer}>
            <View style={[styles.rectangularView, { backgroundColor: '#FFD49B' }]}></View>
            <View style={[styles.rectangularView, { backgroundColor: '#DEA5FF' }]}></View>
            <View style={[styles.rectangularView, { backgroundColor: '#AEA2FC' }]}></View>
            <View style={[styles.rectangularView, { backgroundColor: '#55DCFF' }]}></View>
            <View style={[styles.rectangularView, { backgroundColor: '#F8CDB4' }]}></View>
          </View>
          <View style={styles.topHalf}>
            <Image style={styles.halfImage} source={require('../../assets/images/LOGO-31.png')} />
          </View>
          <View style={styles.container}>
            <Text style={[styles.title2, {paddingTop: 80}]}>Les ateliers{'\n'}</Text>
            <Text style={styles.textCenter}>Découvre ici, les différents ateliers de la journée</Text>
            <IndexCarousel isAtelier={true} />
            <View style={{paddingTop: 100}}/>
            <View>
              <View style={[styles.banner, {position: 'relative', backgroundColor: '#AEA2FC', transform: [{rotate: '-5deg'}]}]}>
                <Text style={[{fontSize: 13, fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
              </View>
              <View style={[styles.banner, {position: 'absolute', top: 35, width: '100%', backgroundColor: '#55DCFF'}]}>
                <Text style={[{fontSize: 13, fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
              </View>
            </View>
            <Image style={styles.image} source={require('../../assets/images/LOGO-38.png')} />
            <Text style={styles.title2}>Les conferences{'\n'}</Text>
            <Text style={[styles.textCenter, {fontWeight: 'bold'}]}>Decouvre ici, les différentes conférences de la journée</Text>
            <IndexCarousel isAtelier={true} />
            <View style={{paddingBottom: 100}}/>
            {/*<View style={styles.triangle}/>*/}
            {/*<View style={[styles.container2,*/}
            {/*  {*/}
            {/*    flexDirection: 'row',*/}
            {/*    alignItems: 'center',*/}
            {/*    justifyContent: 'space-between'*/}
            {/*  }]}>*/}
            {/*  <Image style={styles.imageLeft} source={require('../../assets/images/LOGO-31-250.png')} />*/}
            {/*  <Image style={styles.imageHachure} source={require('../../assets/images/HACHURE.png')}/>*/}
            {/*</View>*/}
            {/*<View style={styles.container2}>*/}
            {/*  <Text style={styles.title3}>Participe en votant tout au long de ta journee</Text>*/}
            {/*  <Text style={[styles.text2, styles.sideText]}>*/}
            {/*    Choisie l'atelier pour lequel tu as envie de voté et lâche ta meilleure analyse !*/}
            {/*  </Text>*/}
            {/*  <Image style={styles.image} source={require('../../assets/images/place_holder.png')} />*/}
            {/*  <TouchableOpacity style={[styles.button, {marginTop: 45}]}>*/}
            {/*    <Text style={styles.textButton}>Je vote</Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*</View>*/}
          </View>
          <Footer />
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
  textCenter: {
    fontSize: 20,
    marginBottom: 55,
    color: '#FEF9F5',
    fontFamily: 'Inter',
    alignSelf: 'center'
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
    width: 150,
    height: 150,
    marginTop: 150,
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
    position: 'absolute',
    top: 125
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
  },
  rectangularView: {
    height: 200,
    width: width / 5,
  },
  rectangularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  banner: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
