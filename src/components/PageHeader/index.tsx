import React, { useState } from 'react';


import style from './style';
import { View, Text, Image, ViewPropTypes } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Modal from 'react-native-modal';

import logoImg from '../../assets/logotipo.png';

function PageHeader (){
    const navigation = useNavigation();
    const [visible, isVisible] = useState(false);

    function nagigateToLogin(){
        return(
            navigation.navigate('Login')
        )
    }





    return(
        <View style={style.container}>
            <Image source={logoImg} style={style.imageLogo}></Image>

            <RectButton onPress={() => { isVisible(true)}}
                style={style.logOutButton}
            >
                <Text style={style.textButton}>Sair</Text>        
                </RectButton> 
        
                
                    <Modal
                        style={style.modalContainer}
                        isVisible={visible}
                        
                    
                    >
                        
                        
                    <View style={style.viewModalContainer}>        
                        <Text style={style.textModal}>Deseja realmente sair do sistema</Text>
                            <View style={style.viewButtonsModal}>
                                <RectButton style={style.rectButtonGreen}>
                                    <Text 
                                    onPress={nagigateToLogin}
                                    style={style.textButtonModal}>Sim</Text>
                                </RectButton>
                                <RectButton style={style.rectButtonRed}>
                                    <Text 
                                    onPress={()=> {isVisible(false)}}
                                    style={style.textButtonModal}>Não</Text>
                                </RectButton>
                            </View>
                    </View>    
                    </Modal>
               

        </View>

        
    )
}

export default PageHeader; 
