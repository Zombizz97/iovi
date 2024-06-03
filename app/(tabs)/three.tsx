import {ScrollView, View, Image, TouchableOpacity, Dimensions} from 'react-native';

import { Text } from '../../components/Themed';
import React from "react";
import { useFonts } from 'expo-font';
import Footer from "../include/footer";
import IndexCarousel from "../include/carousel";
import styles from "../../assets/style/styleSheet";
import Colors from "../../constants/Colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function TabThreeScreen() {
    const [fontsLoaded] = useFonts({
        "AcierBatTextOutline": require("../../assets/fonts/AcierBatText-Outline.otf"),
        "AcierBatTextSolid": require("../../assets/fonts/AcierBatText-Solid.otf"),
        "Inter": require("../../assets/fonts/Inter.otf"),
    });

    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const bannerWidth = screenWidth * 1.5;
    const bannerLeftOffset = (bannerWidth - screenWidth) / -2;

    const ratio = screenWidth / screenHeight;
    const rotationAngle = ratio < 1 ? -9.3 * ratio : -9.3;

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
                <View>
                    <View style={[styles.verticaleLine, {height: hp('4.5%'), position: 'relative', marginLeft: wp('9%'), marginTop: wp('9%'), marginBottom: wp('9%')}]}/>
                    <Text style={[styles.text, {position: 'absolute', marginLeft: wp('13%'), marginTop: wp('9%')}]}>
                        Retrouve nous <Text style={[styles.text, {color: '#AEA2FC'}]}>6 cours Verdun</Text> à Lyon
                    </Text>
                </View>
                <View style={{ marginBottom: hp('5%') }}>
                    <Image style={[styles.imageLeft, {position: 'relative'}]} tintColor={'#FEF9F5'} source={require('../../assets/images/HACHURE.png')} />
                    <Text style={[styles.text, {position: 'absolute', marginLeft: wp('30%')}]}>
                        Rejoins les meilleurs ateliers et conférences de la journée de {'\n'}<Text style={[styles.text, styles.sideText, {color: '#FFD49B'}]}>
                        14h à 20h30
                    </Text>
                    </Text>
                </View>

                <View style={{ position: 'relative' }}>
                    <View style={styles.triangle} />
                    <View style={[styles.banner, {marginTop: hp('1%'), position: 'absolute', backgroundColor: '#55DCFF', left: bannerLeftOffset, width: bannerWidth, transform: [{ rotate: '-9.3deg' }], zIndex: 1}]}>
                        <Text style={[{fontSize: wp('3.15%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>


                <View style={[styles.container2, {zIndex: -1}]}>
                    <Text style={[styles.title, styles.sideText, {marginTop: hp('2%')}]}>
                        LES PROCHAINES C0NFERENCES DE LA JOURNEE A NE PAS LOUPER...
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

                <Text style={[styles.title2 , {marginTop: hp('10%')}]}>  Au Programme...   </Text>
                <Text style={[styles.text, styles.sideText, {textAlign: 'center'}]}>Découvre les différents ateliers, scènes et conférences de la journée basés autour de l'audiovisuel</Text>
                <IndexCarousel isAtelier={true}/>
                <View style={{paddingBottom: hp('12%')}}/>
                <View style={{height: 1, backgroundColor: '#0F016A'}} />
                <View>
                    <View style={[styles.banner, {marginTop: hp('1%'), position: 'absolute', backgroundColor: '#DEA5FF', left: bannerLeftOffset, width: bannerWidth, transform: [{rotate: '9.4deg'}], zIndex: 1}]}>
                        <Text style={[{fontSize: wp('3.15%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>
                <View style={[styles.mirrorTriangle, {zIndex: -1}]}/>
                <View style={[styles.container2, {zIndex: -1}]}>
                    <Text style={styles.title3}>Participe en votant tout au long de ta journee</Text>
                    <Text style={[styles.text2, styles.sideText]}>
                        Choisie l'atelier pour lequel tu as envie de voté et lâche ta meilleure analyse !
                    </Text>
                    <Image style={styles.image} source={require('../../assets/images/place_holder.png')} />
                    <TouchableOpacity style={[styles.button, {marginTop: hp('5%'), marginBottom: hp('7%')}]}>
                        <Text style={styles.textButton}>Je vote</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={[styles.banner, {marginTop: hp('1%'), position: 'absolute', backgroundColor: '#FFD49B', left: bannerLeftOffset, width: bannerWidth, transform: [{rotate: '-9.4deg'}], zIndex: 1}]}>
                        <Text style={[{fontSize: wp('3.15%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>
                <View style={[styles.reverseTriangle, {zIndex: -1}]} />
                <Text style={[styles.title2, styles.sideText, {marginTop: hp('15%')}]}>+D'info?</Text>
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
                    <View style={[styles.banner, {position: 'absolute', backgroundColor: '#AEA2FC', left: bannerLeftOffset, width: bannerWidth, zIndex: 1}]}>
                        <Text style={[{fontSize: wp('3.1%'), fontFamily: 'Inter', color: Colors.dark.background}]}>SON PHOTO VIDEO POST-PRODUCTION LUMIERE</Text>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    );
}
