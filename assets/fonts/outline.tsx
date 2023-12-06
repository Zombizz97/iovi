import {StyleSheet, Text, View} from "react-native";

export const Outline = ({text}: {text: string}) => {
    return (
        <View>
            <Text style={styles.iovi}>{text}</Text>
            <Text style={[styles.iovi, styles.abs, {textShadowOffset: {width: -1, height: -1}}]}>{text}</Text>
            <Text style={[styles.iovi, styles.abs, {textShadowOffset: {width: -1, height: 1}}]}>{text}</Text>
            <Text style={[styles.iovi, styles.abs, {textShadowOffset: {width: 1, height: -1}}]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iovi: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white', // Couleur du texte
        textShadowColor: '#0F016A', // Couleur de l'ombre (contour)
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 }, // Position de l'ombre (contour)
    },
    abs: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})