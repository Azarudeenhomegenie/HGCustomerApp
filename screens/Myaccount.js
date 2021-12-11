import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MyaccountScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Myaccount Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MyaccountScreen;