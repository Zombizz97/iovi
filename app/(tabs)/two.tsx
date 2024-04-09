import { ScrollView, View, Image} from 'react-native';

import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import React from "react";
import { useFonts } from 'expo-font';
import Footer from "../include/footer";
import IndexCarousel from "../include/carousel";
import styles from "../../assets/style/styleSheet";

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
          <View style={styles.topHalfTwo}>
            <Image style={styles.halfImage} source={require('../../assets/images/LOGO-31.png')} />
          </View>
          <View style={styles.container}>
            <Text style={[styles.title2, {paddingTop: 80}]}>Les ateliers</Text>
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
            <Image style={styles.image3} source={require('../../assets/images/LOGO-38.png')} />
            <Text style={styles.title2}>Les conferences</Text>
            <Text style={[styles.textCenter, {fontWeight: 'bold'}]}>Decouvre ici, les différentes conférences de la journée</Text>
            <IndexCarousel isAtelier={true} />
            <View style={{paddingBottom: 100}}/>
          </View>
          <Footer />
        </ScrollView>
      </View>
  );
}
