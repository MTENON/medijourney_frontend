import { StyleSheet, View, Pressable } from 'react-native'
import { Iconify } from 'react-native-iconify'

/**
 * Les boutons peuvent prendre plusieurs plusieurs valeurs d'icônes pour pouvoir les afficher
 * 
 * @param {*} variant "primaire" ou "secondaire"
 * @param {*} circleValue "taille du bouton en px"
 * @param {*} action fonction à réaliser par le bouton
 * @param {*} iconStyle le nom du bouton à afficher
 * @example Iconify
 * drugIcon -> "mdi:drugs"
 * trashIcon -> "ion:trash-sharp"
 * crossIcon -> "emojione-v1:cross-mark" (only red)
 * penIcon -> "mdi:pen-add"
 * checkIcon -> "icon-park:add-two"
 * chestIcon -> "ph:treasure-chest-fill"
 * @returns 
 */

export default function ButtonCircle({ variant = "primary", iconValue, circleValue = 60, action }) {

    const buttonColor = {
        primary: "#54DAFE",
        secondary: "#704E9E"
    }

    //stockage des icones
    const iconDisplay = {
        drugIcon: <Iconify size={circleValue - 10} icon="mdi:drugs" color={buttonColor[variant]} />,
        trashIcon: <Iconify size={circleValue - 10} icon="ion:trash-sharp" color={buttonColor[variant]} />,
        crossIcon: <Iconify size={circleValue - 20} icon="emojione-v1:cross-mark" color={"ec1c24"} />,
        penIcon: <Iconify size={circleValue - 10} icon="mdi:pen-add" color={buttonColor[variant]} />,
        checkIcon: <Iconify size={circleValue - 10} icon="icon-park:add-two" color={buttonColor[variant]} />,
        chestIcon: <Iconify size={circleValue - 10} icon="ph:treasure-chest-fill" color={buttonColor[variant]} />
    }

    const styles = StyleSheet.create({
        container: {
            height: circleValue,
            width: circleValue,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 1000,
            borderWidth: 2,
            borderColor: '#65606B',
            justifyContent: 'center',
            backgroundColor: '#EEEEEE'
        }
    })

    return (
        <Pressable onPress={action} style={styles.container}>

            {iconDisplay[iconValue]}

        </Pressable>
    );
};