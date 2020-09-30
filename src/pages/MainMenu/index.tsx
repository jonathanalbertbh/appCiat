
import React from 'react';
import { View, Image, Text } from 'react-native';
import {Feather} from '@expo/vector-icons';


import style from './style';
import PageHeader from '../../components/PageHeader';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




function MainMenu(){

    const navigation = useNavigation();

    function navigateToListOs(){
        return(
            navigation.navigate('Listos')
        )
    }

    function navigateToOpenOs(){
        return(
            navigation.navigate('EnterToCnpj')
        )
    }

    return(
        <View style={style.container}>
            <PageHeader/>
            <View style={style.containerMenu}>
                <RectButton style={style.buttonsMenu}
                    onPress={navigateToOpenOs}
                >
                    <View style={style.viewIcon}>
                        <Feather name="plus" size={20} color="black" />
                        
                    </View>
                    <Text style={style.textButton}>Abrir O.S</Text>
                </RectButton>
                <RectButton 
                onPress={navigateToListOs}
                style={style.buttonsMenu}>
                    <View style={style.viewIcon}>
                        <Feather name="list" size={20} color="black" />
                        
                    </View>
                    <Text style={style.textButton}>Lista de Chamado
                    </Text>
                </RectButton>
                
                
            </View>
        </View>
    )
}

export default MainMenu;