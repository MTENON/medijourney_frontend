import { button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.body}>
            <Text>HomeScreen</Text>
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