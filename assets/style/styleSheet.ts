import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

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
        fontSize: 15,
        marginBottom: 55,
        color: '#FEF9F5',
        fontFamily: 'Inter'
    },
    text2: {
        fontSize: 15,
        marginBottom: 55,
        color: '#0F016A',
        fontFamily: 'Inter'
    },
    sideText: {
        alignSelf: 'flex-start',
        position: 'relative',
        top: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 20,
        paddingTop: 8,
        fontFamily: 'Inter'
    },
    textCenter: {
        fontSize: 15,
        marginBottom: 55,
        color: '#FEF9F5',
        fontFamily: 'Inter',
        alignSelf: 'center'
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
    image3: {
        width: 150,
        height: 150,
        marginTop: 150,
        alignSelf: 'center'
    },
    halfImage: {
        width: width,
        height: height / 2,
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
    imageFacebook: {
        width: 68,
        height: 68,
        alignSelf: 'center',
        marginTop: 5
    },
    imageInsta: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginTop: 5
    },
    logo: {
        resizeMode: 'center',
        height: 100,
        width: '100%'
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
        height: 250,
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
    topHalf: {
        width: width,
        height: height / 4,
        overflow: 'hidden',
    },
    triangleWhite: {
        borderRightWidth: Dimensions.get('window').width,
        borderBottomWidth: 60,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Colors.dark.background,
    },
    rectangularView: {
        height: 200,
        width: width / 5,
    },
    banner: {
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    topHalfTwo: {
        width: width,
        height: height / 4,
        overflow: 'hidden',
        position: 'absolute',
        top: 125
    },
});

export default styles;