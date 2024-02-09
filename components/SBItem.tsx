import React from "react";
import type { StyleProp, ViewStyle, ViewProps, ImageSourcePropType } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import type { AnimateProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

import { SBImageItem } from "./SBImageItem";
import { SBTextItem } from "./SBTextItem";

interface Props extends AnimateProps<ViewProps> {
  style?: StyleProp<ViewStyle>
  index?: number
  pretty?: boolean
  showIndex?: boolean
  img?: ImageSourcePropType
  text?: string
}

export const SBItem: React.FC<Props> = (props) => {
  const { style, showIndex = true, index, img, text, testID, ...animatedViewProps } = props;
  return (
    <LongPressGestureHandler>
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        {(
            <>
              <SBImageItem style={style} index={index} showIndex={typeof index === 'number' && showIndex}
                           img={img}/>
              <SBTextItem text={text}/>
            </>
        )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};
