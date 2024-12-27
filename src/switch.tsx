import { View, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, interpolateColor } from 'react-native-reanimated'
import { styles } from './style';
import { SwitchComponentType } from './type'

const Switch = (
    {
        activeIconColor = "white",
        activeBgColor = "#02D95A",
        passiveIconColor = "white",
        passiveBgColor = "lightgray",
        dumping = 20,
        startPosition = 0,
        endPosition = 20,
        style
    }: SwitchComponentType) => {

    const [active, setActive] = useState<boolean>(false);
    const animation = useSharedValue(startPosition);
    const animatedIconStyle = useAnimatedStyle(() => {

        return {
            transform: [
                {
                    translateX: animation.value,
                }
            ],
            backgroundColor: interpolateColor(
                animation.value,
                [0, 1],
                [passiveIconColor, activeIconColor]
            )
        }
    }, [])

    const animatedBackgroundStyle = useAnimatedStyle(() => {
        return {

            backgroundColor: interpolateColor(
                animation.value,
                [0, 1],
                [passiveBgColor, activeBgColor]
            )
        }
    }, [])

    const startAnimation = () => {

        if (active === false) {
            animation.value = withSpring(endPosition, { damping: dumping }, () => {
            });
            setActive(true);

        }
        else {
            animation.value = withSpring(startPosition, { damping: dumping }, () => {
            });
            setActive(false);

        }
    }
    return (
        <Pressable style={style} onPress={() => { startAnimation() }}>
            <Animated.View style={[styles.boxContainer, animatedBackgroundStyle]}>
                <Animated.View style={[styles.box, animatedIconStyle]} />
            </Animated.View>
        </Pressable>
    )
};

export default Switch