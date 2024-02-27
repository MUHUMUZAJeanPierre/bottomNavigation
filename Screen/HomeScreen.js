import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text onPress={navigation.navigate('Profile')} >SDFGHJKLC</Text>
        </View>
    );
}

// const styles = StyleSheet.create({})

export default HomeScreen;
