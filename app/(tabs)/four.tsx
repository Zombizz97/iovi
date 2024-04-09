import { ScrollView, View, Image } from 'react-native';

import { Text } from '../../components/Themed';
import React from "react";
import { useFonts } from 'expo-font';
import Footer from "../include/footer";
import IndexCarousel from "../include/carousel";
import styles from "../../assets/style/styleSheet";
import Colors from "../../constants/Colors";

export default function TabFourScreen() {
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
                <Text style={[styles.title2, {paddingTop: 40}]}>
                    LES ATELIERS
                </Text>
                <Text style={[styles.textCenter, {fontWeight: 'bold'}]}>Découvre ici, les différents ateliers de la journée</Text>
                <IndexCarousel isAtelier={true} />
                <View style={{paddingBottom: 100}}/>

                <View style={{ position: 'relative' }}>
                    <View style={styles.triangle} />
                    <View style={[styles.banner, {position: 'absolute', backgroundColor: '#DEA5FF', width: '100%', transform: [{rotate: '-8deg'}]}]}>
                        <Text style={[{fontSize: 13, fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>

                <View style={[styles.container2, {paddingTop: 20}]}>
                    <View style={[styles.banner, {backgroundColor: '#55DCFF', width: '100%'}]}>
                        <Text style={[{fontSize: 13, fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>

                <Image style={styles.image3} source={require('../../assets/images/LOGO-38.png')} />
                <Text style={styles.title2}>Les conferences</Text>
                <Text style={[styles.textCenter, {fontWeight: 'bold'}]}>Decouvre ici, les différentes conférences de la journée</Text>
                <IndexCarousel isAtelier={true} />
                <View style={{paddingBottom: 100}}/>
                <View style={{ position: 'relative' }}>
                    <View style={styles.triangle} />
                    <View style={[styles.banner, {position: 'absolute', backgroundColor: '#F8CDB4', width: '100%', transform: [{rotate: '-8deg'}]}]}>
                        <Text style={[{fontSize: 13, fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={[styles.title, {marginTop: 20, alignSelf: 'center'}]}>
                        LES PROJECTIONS
                    </Text>
                    <Text style={[styles.textCenter, {fontWeight: 'bold', color: '#0F016A', marginTop: 25}]}>Découvre ici, les différents ateliers de la journée</Text>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundRight} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForRight}/>
                    </View>
                    <View>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', paddingRight: 80}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-end', position: 'absolute', paddingRight: 20}]}>Salle 102</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundLeft} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForLeft}/>
                    </View>
                    <View>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-start', paddingLeft: 20}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', position: 'absolute', paddingLeft: 130}]}>Salle 102</Text>
                    </View>
                    <Text style={[styles.text2, styles.textCenter, {fontWeight: 'bold', color: '#0F016A', paddingTop: 50, marginBottom: 20}]}>Atelier sons et lumières</Text>
                    <Text style={[styles.textCenter, {color: '#0F016A', paddingLeft: 30, paddingRight: 30, marginBottom: 50}]}>Découvre les différents ateliers et conférence de la journée basés autour de l'audiovisuel</Text>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundRight} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForRight}/>
                    </View>
                    <View>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', paddingRight: 80}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-end', position: 'absolute', paddingRight: 20}]}>Salle 102</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundLeft} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForLeft}/>
                    </View>
                    <View style={{ marginBottom: 60 }}>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-start', paddingLeft: 20}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', position: 'absolute', paddingLeft: 130}]}>Salle 102</Text>
                    </View>
                </View>

                <View>
                    <View style={[styles.banner, {position: 'absolute', backgroundColor: '#55DCFF', width: '100%', transform: [{rotate: '-8deg'}], zIndex: 1}]}>
                        <Text style={[{fontSize: 13, fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>
                <View style={styles.reverseTriangle} />
                <View>
                    <Text style={[styles.title2, styles.sideText, {marginTop: 100}]}>+D'info?</Text>
                    <View>
                        <View style={[styles.verticaleLine, {position: 'relative', marginLeft: 35}]}/>
                        <Text style={[styles.text, {position: 'absolute', marginLeft: 55, marginTop: 35}]}>
                            ICI RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
                        </Text>
                        <Text style={[styles.text, {position: 'absolute', marginLeft: 95, marginTop: 150}]}>
                            REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
                        </Text>
                        <Text style={[styles.text, {position: 'absolute', marginLeft: 140, marginTop: 345}]}>
                            REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
                        </Text>
                    </View>
                    <Image source={require('../../assets/images/LOGO-38-HALF.png')}/>
                    <View>
                        <View style={[styles.verticaleLine, {position: 'relative', marginLeft: 35, marginBottom: 100}]}/>
                        <Text style={[styles.text, {position: 'absolute', marginLeft: 95, marginTop: 5}]}>
                            ICI RETROUVE{'\n'}TON PLAN{'\n'}VIRTUEL
                        </Text>
                        <Text style={[styles.text, {position: 'absolute', marginLeft: 55, marginTop: 150}]}>
                            REJOINS LES MEILLEURS{'\n'}ATELIERS ET CONFERENCES{'\n'}DE LA JOURNÉE
                        </Text>
                    </View>
                    <View>
                        <View style={[styles.banner, {position: 'absolute', backgroundColor: '#AEA2FC', width: '100%', zIndex: 1}]}>
                            <Text style={[{fontSize: 13, fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                        </View>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    );
}
