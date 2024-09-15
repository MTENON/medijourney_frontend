import { StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { useForm } from '../hooks/useForm';

import { ButtonCircle, InputBox } from "../components/components.js"

export default function HomeScreen({ navigation }) {

    const { handleChange, formData } = useForm();

    const fields = [
        {
            name: "username",
            placeholder: "Username"
        },
        {
            name: "password",
            secureTextEntry: true,
            placeholder: "Password"
        }
    ]
    const inputs = fields.map((value) => {

        return <InputBox key={value.name} {...value} onChangeText={e => handleChange(value.name, e)} />
    })

    function handlePress() {
        console.log(formData);
    }

    return (

        <ImageBackground
            source={require("../assets/background.png")}
            style={styles.body}
        >
            <Image
                source={require("../assets/Fiole étoilée.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>MediJourney</Text>

            {inputs}

            <ButtonCircle iconValue={"drugIcon"} action={handlePress} />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    body: {
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        color: "whitesmoke"
    },
    logo: {
        height: 300,
        width: 300
    }
})