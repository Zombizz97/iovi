import {ScrollView, View, Image, Dimensions} from 'react-native';

import { Text } from '../../components/Themed';
import React from "react";
import { useFonts } from 'expo-font';
import Footer from "../include/footer";
import IndexCarousel from "../include/carousel";
import styles from "../../assets/style/styleSheet";
import Colors from "../../constants/Colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function TabFourScreen() {
    const [fontsLoaded] = useFonts({
        "AcierBatTextOutline": require("../../assets/fonts/AcierBatText-Outline.otf"),
        "AcierBatTextSolid": require("../../assets/fonts/AcierBatText-Solid.otf"),
        "Inter": require("../../assets/fonts/Inter.otf"),
    });

    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const bannerWidth = screenWidth * 1.5;
    const bannerLeftOffset = (bannerWidth - screenWidth) / -2;

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={[styles.container]}>
            <ScrollView>
                <Text style={[styles.title2, {paddingTop: wp('4%')}]}>
                    LES ATELIERS
                </Text>
                <Text style={[styles.textCenter, {fontWeight: 'bold'}]}>Découvre ici, les différents ateliers de la journée</Text>
                <IndexCarousel isAtelier={true} />
                <View style={{paddingBottom: hp('13%')}}/>

                <View style={{ position: 'relative' }}>
                    <View style={styles.triangle} />
                    <View style={[styles.banner, {marginTop: wp('1.1%'), position: 'absolute', backgroundColor: '#DEA5FF', left: bannerLeftOffset, width: bannerWidth, transform: [{rotate: '-9.4deg'}]}]}>
                        <Text style={[{fontSize: wp('3.1%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>

                <View style={[styles.container2, {paddingTop: hp('2%'), zIndex: -1}]}>
                    <View style={[styles.banner, {backgroundColor: '#55DCFF', width: '100%'}]}>
                        <Text style={[{fontSize: wp('3.1%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>

                <Image style={styles.image3} source={require('../../assets/images/LOGO-38.png')} />
                <Text style={styles.title2}>Les conferences</Text>
                <Text style={[styles.textCenter, {fontWeight: 'bold'}]}>Decouvre ici, les différentes conférences de la journée</Text>
                <IndexCarousel isAtelier={true} />
                <View style={{paddingBottom: hp('12%')}}/>
                <View style={{ position: 'relative' }}>
                    <View style={[styles.triangle, {zIndex: -1}]} />
                    <View style={[styles.banner, {marginTop: hp('1%'), position: 'absolute', backgroundColor: '#F8CDB4', left: bannerLeftOffset, width: bannerWidth, transform: [{rotate: '-9.4deg'}], zIndex: 1}]}>
                        <Text style={[{fontSize: wp('3.1%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>
                <View style={[styles.container2, {zIndex: -1}]}>
                    <Text style={[styles.title, {marginTop: hp('2%'), alignSelf: 'center'}]}>
                        LES PROJECTIONS
                    </Text>
                    <Text style={[styles.textCenter, {fontWeight: 'bold', color: '#0F016A', marginTop: hp('3%'), marginLeft: wp('1%')}]}>Découvre ici, les différents ateliers de la journée</Text>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundRight} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForRight}/>
                    </View>
                    <View>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', paddingRight: wp('20%')}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-end', position: 'absolute', paddingRight: wp('5%')}]}>Salle 102</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundLeft} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForLeft}/>
                    </View>
                    <View>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-start', paddingLeft: wp('5%')}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', position: 'absolute', paddingLeft: wp('30%')}]}>Salle 102</Text>
                    </View>
                    <Text style={[styles.text2, styles.textCenter, {fontWeight: 'bold', color: '#0F016A', paddingTop: hp('5%'), marginBottom: hp('3%')}]}>Atelier sons et lumières</Text>
                    <Text style={[styles.textCenter, {color: '#0F016A', paddingLeft: wp('5%'), paddingRight: wp('5%'), marginBottom: hp('5%')}]}>Découvre les différents ateliers et conférence de la journée basés autour de l'audiovisuel</Text>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundRight} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForRight}/>
                    </View>
                    <View>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', paddingRight: wp('20%')}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-end', position: 'absolute', paddingRight: wp('5%')}]}>Salle 102</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/LOGO-39.png')} style={styles.imageHachureRoundLeft} />
                        <Image source={require('../../assets/images/DOT.png')} style={styles.dotForLeft}/>
                    </View>
                    <View style={{ marginBottom: 60 }}>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'flex-start', paddingLeft: wp('5%')}]}>Temps - 30min</Text>
                        <Text style={[styles.text2, {marginBottom: 0, alignSelf: 'center', position: 'absolute', paddingLeft: wp('30%')}]}>Salle 102</Text>
                    </View>
                </View>

                <View>
                    <View style={[styles.banner, {marginTop: hp('1%'), position: 'absolute', backgroundColor: '#55DCFF', left: bannerLeftOffset, width: bannerWidth, transform: [{rotate: '-9.4deg'}], zIndex: 1}]}>
                        <Text style={[{fontSize: wp('3.1%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>
                <View style={[styles.reverseTriangle, {zIndex: -1}]} />
                <View>
                    <Text style={[styles.title2, styles.sideText, {marginTop: hp('10%')}]}>+D'info?</Text>
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
                    <View>
                        <View style={[styles.banner, {position: 'absolute', backgroundColor: '#AEA2FC', width: '100%', zIndex: 1}]}>
                            <Text style={[{fontSize: wp('3.1%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                        </View>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    );
}
