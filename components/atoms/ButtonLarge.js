import { StyleSheet, TouchableOpacity } from "react-native"

export default function ButtonLarge() {

    const styles = StyleSheet.create({
        container: {
            height: "10%",
            width: "50%",
            backgroundColor: "#EEEEEE"
        }
    })
    return (
        <TouchableOpacity style={styles.container}>

        </TouchableOpacity>
    )
}