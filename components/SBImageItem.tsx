import React from "react";
import type {
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { Image } from 'expo-image';

interface Props {
  style?: StyleProp<ViewStyle>
  index?: number
  showIndex?: boolean
  img?: ImageSourcePropType
}

export const SBImageItem: React.FC<Props> = ({
  style,
  index: _index,
  img
}) => {
  const index = _index ?? 0;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <Image cachePolicy={'memory-disk'} key={index} style={styles.image} source={img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
