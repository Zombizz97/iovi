import * as React from "react";
import {View} from "react-native";
import Animated, {Extrapolate, interpolate, useAnimatedStyle, useSharedValue,} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import {SBItem} from "../../components/SBItem";
import {window} from "../../constants";

const PAGE_WIDTH = window.width;
const colors = [
    "#DEA5FF",
    "#AEA2FC",
    "#55DCFF",
    "#F8CDB4",
    "#FFD49B",
];

const images = [
    require("../../assets/images/place_holder.png"),
    require("../../assets/images/place_holder.png"),
    require("../../assets/images/place_holder.png"),
    require("../../assets/images/place_holder.png"),
    require("../../assets/images/place_holder.png"),
];

function IndexCarousel(props: { isAtelier: boolean; }) {
    const { isAtelier } = props;
    const texts = isAtelier ? [
        "Atelier Son",
        "Atelier Photo",
        "Atelier Vidéo",
        "Atelier Post Production",
        "Atelier Lumière",
    ] : [
        "Atelier 1",
        "Atelier 2",
        "Atelier 3",
        "Atelier 4",
        "Atelier 5"
    ]
    const subTexts = [
        "Découvre les différents ateliers et conférence de la journée basés autour de l'audiovisuel",
        "Découvre les différents ateliers et conférence de la journée basés autour de l'audiovisuel",
        "Découvre les différents ateliers et conférence de la journée basés autour de l'audiovisuel",
        "Découvre les différents ateliers et conférence de la journée basés autour de l'audiovisuel",
        "Découvre les différents ateliers et conférence de la journée basés autour de l'audiovisuel",
    ]
    const [snapEnabled] = React.useState<boolean>(true);
    const progressValue = useSharedValue<number>(0);
    let baseOptions;
    if (isAtelier) {
        baseOptions = {
            vertical: false,
            width: PAGE_WIDTH,
            height: hp('65%'),
        } as const;
    } else {
        baseOptions = {
            vertical: false,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH,
        } as const;
    }

    return (
        <View
            style={{
                alignItems: "center",
                marginTop: hp('1%')
            }}
        >
            <Carousel
                {...baseOptions}
                style={{
                    width: PAGE_WIDTH,
                }}
                loop
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                panGestureHandlerProps={{
                    activeOffsetX: [-100, 100],
                    activeOffsetY: [-200, 200],
                }}
                data={colors}
                renderItem={({ index }) =>
                    <SBItem index={index} img={images[index]} text={texts[index]} subText={subTexts[index]} isAtelier={isAtelier} />
                }
            />
            {!!progressValue && (
                <View
                    style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: wp('25%'),
                                alignSelf: "center",
                            }
                    }
                >
                    {colors.map((backgroundColor, index) => {
                        return (
                            <PaginationItem
                                backgroundColor= {colors[index]}
                                animValue={progressValue}
                                index={index}
                                key={index}
                                length={colors.length}
                            />
                        );
                    })}
                </View>
            )}
        </View>
    );
}

const PaginationItem: React.FC<{
    index: number
    backgroundColor: string
    length: number
    animValue: Animated.SharedValue<number>
}> = (props) => {
    const { animValue, index, length, backgroundColor } = props;
    const width = 10;

    const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue?.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP,
                    ),
                },
            ],
        };
    }, [animValue, index, length]);
    return (
        <View
            style={{
                backgroundColor: "#FEF9F5",
                width,
                height: width,
                borderRadius: 50,
                overflow: "hidden",
                transform: [
                    {
                        rotateZ: "0deg",
                    },
                ],
            }}
        >
            <Animated.View
                style={[
                    {
                        borderRadius: 50,
                        backgroundColor,
                        flex: 1,
                    },
                    animStyle,
                ]}
            />
        </View>
    );
};

export default IndexCarousel;