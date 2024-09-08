import { StyleSheet, View, Pressable } from 'react-native'

export default function ButtonCircle(heightValue, widthValue, action) {

    function onClick() {
        // action();
        console.log("press")
    }

    return (
        <Pressable onPress={onClick}>
            <View style={
                [styles.container,
                {
                    // height: heightValue,
                    // width: widthValue
                }
                ]
            }>
            </View>
        </Pressable>

    );
};

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 1000,
        borderWidth: 2,
        borderColor: '#65606B',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE'
    }
})