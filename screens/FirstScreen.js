import { StyleSheet, Text, View } from 'react-native';

export default function FirstScreen({ navigation }) {

    return (
        <View style={styles.body}>
            <Text>FirstScreen</Text>
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