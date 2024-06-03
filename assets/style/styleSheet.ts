import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

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
    rectangularContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: wp('4%'),
        marginBottom: hp('6%'),
        color: '#FEF9F5',
        fontFamily: 'Inter'
    },
    text2: {
        fontSize: wp('4%'),
        marginBottom: hp('6%'),
        color: '#0F016A',
        fontFamily: 'Inter'
    },
    sideText: {
        alignSelf: 'flex-start',
        position: 'relative',
        top: hp('1%'),
        padding: wp('5%'),
    },
    textButton: {
        fontSize: wp('5%'),
        paddingTop: hp('1%'),
        fontFamily: 'Inter'
    },
    textCenter: {
        fontSize: wp('4%'),
        marginBottom: hp('6%'),
        color: '#FEF9F5',
        fontFamily: 'Inter',
        alignSelf: 'center'
    },
    title: {
        fontSize: wp('9%'),
        color: '#0F016A',
        fontFamily: 'AcierBatTextSolid',
        lineHeight: hp('5.5%')
    },
    titleOutline: {
        fontSize: wp('9%'),
        color: '#0F016A',
        fontFamily: 'AcierBatTextOutline'
    },
    title2: {
        fontSize: wp('10%'),
        alignSelf: 'center',
        color: '#FEF9F5',
        fontFamily: 'AcierBatTextSolid',
        marginBottom: hp('3%'),
        lineHeight: hp('5.5%')
    },
    title3: {
        fontSize: wp('10%'),
        fontFamily: 'AcierBatTextOutline',
        color: '#0F016A',
        paddingLeft: wp('6%'),
        paddingTop: hp('3%')
    },
    image: {
        width: wp('95%'),
        height: wp('95%'),
        alignSelf: 'center'
    },
    image2: {
        width: wp('95%'),
        height: wp('50%'),
        marginLeft: wp('6%'),
        marginTop: hp('3%')
    },
    image3: {
        width: wp('40%'),
        height: wp('40%'),
        marginTop: hp('20%'),
        alignSelf: 'center'
    },
    halfImage: {
        width: width,
        height: height / 2,
    },
    halfImageForStripes: {
        width: width,
        height: height / 2,
        overflow: 'hidden',
        position: 'absolute',
    },
    imageRight: {
        width: wp('30%'),
        height: wp('30%'),
        marginLeft: "auto",
        marginRight: wp('5%')
    },
    imageLeft: {
        width: wp('24%'),
        height: wp('20%'),
        marginRight: "auto"
    },
    imageHachure: {
        width: wp('40%'),
        height: hp('35%'),
        resizeMode: "cover",
        position: 'absolute',
        bottom: hp('2%'),
        zIndex: -1,
    },
    imageHachureCenter: {
        width: wp('60%'),
        height: hp('20%'),
        resizeMode: "cover",
        position: 'absolute',
        bottom: hp('17%'),
        zIndex: -1,
        alignSelf: 'center'
    },
    imageFacebook: {
        width: 68,
        height: 68,
        alignSelf: 'center',
        marginTop: hp('0.5%')
    },
    imageInsta: {
        width: wp('17%'),
        height: wp('17%'),
        alignSelf: 'center',
        marginTop: hp('0.5%')
    },
    imageHachureRoundRight: {
        width: wp('85%'),
        height: hp('15%'),
        borderBottomLeftRadius: wp('25%'),
        borderTopLeftRadius: wp('25%'),
        alignSelf: 'flex-end',
    },
    imageHachureRoundLeft: {
        width: wp('85%'),
        height: hp('15%'),
        borderBottomRightRadius: wp('25%'),
        borderTopRightRadius: wp('25%')
    },
    logo: {
        resizeMode: 'center',
        height: hp('15%'),
        width: '100%'
    },
    ridesFriends: {
        paddingTop: hp('10%'),
        alignItems: "flex-end",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: hp('3%'),
    },
    verticaleLine: {
        height: hp('37%'),
        width: 1,
        backgroundColor: '#FEF9F5',
    },
    triangle: {
        position: 'relative',
        borderLeftWidth: Dimensions.get('window').width,
        borderBottomWidth: hp('8%'),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FEF9F5',
    },
    mirrorTriangle: {
        position: 'relative',
        borderRightWidth: Dimensions.get('window').width,
        borderBottomWidth: hp('8%'),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FEF9F5',
    },
    reverseTriangle: {
        position: 'relative',
        borderRightWidth: Dimensions.get('window').width,
        borderTopWidth: hp('8%'),
        borderRightColor: 'transparent',
        borderTopColor: '#FEF9F5',
    },
    button: {
        marginLeft: wp('6%'),
        backgroundColor: Colors.dark.background,
        alignItems: 'center',
        width: wp('45%'),
        height: hp('6%')
    },
    topHalf: {
        width: width,
        height: height / 4,
        overflow: 'hidden',
    },
    triangleWhite: {
        borderRightWidth: Dimensions.get('window').width,
        borderBottomWidth: hp('8%'),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Colors.dark.background,
    },
    rectangularView: {
        height: hp('24%'),
        width: width / 5,
    },
    banner: {
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('0.5%'),
        alignItems: 'center',
    },
    topHalfTwo: {
        width: width,
        height: height / 4,
        overflow: 'hidden',
        position: 'absolute',
        top: hp('18%')
    },
    dotForRight: {
        width:hp('14%'),
        height: hp('14%'),
        position:'absolute',
        top: hp('0.5%'),
        left: wp('16.5%')
    },
    dotForLeft: {
        width:hp('14%'),
        height: hp('14%'),
        position:'absolute',
        top: hp('0.5%'),
        right: wp('16.5%')
    }
});

export default styles;