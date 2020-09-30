import React from 'react';
import { View, Text } from 'react-native';
import {Feather} from '@expo/vector-icons'; 


import style from './style';
import { useNavigation } from '@react-navigation/native';

function Footer(){

    const navigator = useNavigation();
    function navigateToMainMenu(){
        navigator.navigate('MainMenu')
    }

    return(
        <View style= {style.container}>
            <Feather 
            name = "arrow-left" 
            style={style.icon} size={25}
            onPress={navigateToMainMenu}
            />
            <Text style={style.textIcon}>Voltar</Text>
        </View>
    )
}

export default Footer;