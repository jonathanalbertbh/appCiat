import React, { useContext, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, TextInput, Text, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import AuthContext from '../../contexts/auth';

import style from './style';
import LogoImg from '../../assets/logotipo.png';


const {signed} = useContext(AuthContext);

export default function Login(){

const navigation = useNavigation();











 
    return(
        <View style={style.container}>
            <Image source={LogoImg} style={style.imageLogo} />

            <Text style={style.textToInput}>
                Login
            </Text>
            <TextInput
            keyboardType={"visible-password"}  
            style={style.textInput}></TextInput>
            <Text style={style.textToInput}>
                Senha
            </Text>
            <TextInput style={style.textInput}></TextInput>
            
            <RectButton 
            style={style.loginButton}
            onPress={()=>{}}
            >
                <Text style={style.textButton}>Entrar</Text>
            </RectButton>    
        </View>
    )
}