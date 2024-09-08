import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';

import ButtonCircle from '../components/atoms/ButtonCircle';

export default function HomeScreen({ navigation }) {

    const { handleChange, formData } = useForm();
    console.log(formData)

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
        return <TextInput key={value.name} {...value} onChangeText={e => handleChange(value.name, e)}></TextInput>
    })

    return (
        <View style={styles.body}>
            <Text>HomeScreen</Text>

            {inputs}

            <ButtonCircle />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})