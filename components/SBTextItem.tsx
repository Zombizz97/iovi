import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>
  text?: string
}

export const SBTextItem: React.FC<Props> = ({ style, text }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={{ fontSize: 35, color: "#FEF9F5" }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0F016A',
    paddingTop: 15,
    paddingBottom: 15
  },
});
