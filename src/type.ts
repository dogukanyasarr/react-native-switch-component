import { StyleProp, ViewStyle } from "react-native";

export type SwitchComponentType = {
    /**
     * The color of the icon when active
     * @default white
     */
    activeIconColor?: string;

    /**
     * The color of the background when active
     * @default #02D95A
     */
    activeBgColor?: string;

    /**
     * The color of the icon when passive
     * @default white
     */
    passiveIconColor?: string;

    /**
     * The color of the background when passive
     * @default lightgray
     */
    passiveBgColor?: string;

    /**
     * Damping value for the spring animation.
     * @default 20
     */
    dumping?: number;

    /**
     * The initial position.
     * @default 0
     */
    startPosition?: number;

    /**
     * The final position.
     * @default 20
     */
    endPosition?: number;

    style?: StyleProp<ViewStyle>
}
