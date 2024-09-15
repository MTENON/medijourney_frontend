import { StyleSheet, View, TextInput } from "react-native";

export default function InputBox({ heigthPerc = "10%", widthPerc = "60%", border = "primary", name, placeholder, onChangeText, secureTextEntry = false }) {

    const borderColor = {
        primary: "#54DAFE",
        secondary: "#704E9E"
    }

    const styles = StyleSheet.create({
        container: {
            height: heigthPerc,
            width: widthPerc,
            justifyContent: "center",
            alignItems: 'center',
            margin: 5,
            backgroundColor: "#EEEEEE",
            borderRadius: 20,
            borderBottomWidth: 19,
            borderColor: borderColor[border]
        }
    });

    return (
        <View style={styles.container}>
            <TextInput name={name} placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry}></TextInput>
        </View>
    )
}

