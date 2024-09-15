import { Pressable } from 'react-native'
import { Iconify } from 'react-native-iconify'

export default function ButtonPlus({ action, variant = "primary", circleValue = 60 }) {

    const buttonColor = {
        primary: "#54DAFE",
        secondary: "#704E9E"
    }

    return (
        <Pressable onPress={action}>

            <Iconify size={circleValue} icon="mdi:new-box" color={buttonColor[variant]} />

        </Pressable>
    );
};