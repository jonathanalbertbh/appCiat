import React from 'react'
import PageHeader from '../../../components/PageHeader'
import Footer from '../../../components/Footer'
import { View, Text, TextInput } from 'react-native'

import style from './style'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function EnterToCnpj(){

    const navigator = useNavigation();

    function navigateToOpenOs(){
        navigator.navigate('OpenOs')
    }

    return(



        <View style={style.container}>
            <PageHeader/>

            <View style={style.box}>

                <Text style={style.textInput}> Digite o CNPJ</Text>
                <TextInput 
                    placeholder="00.000.000/0000-00"
                style={style.input}></TextInput>
                <RectButton style={style.button}
                    onPress={navigateToOpenOs}
                >
                    <Text style={style.textButton}>Buscar</Text>
                </RectButton>

            </View>

            <Footer/>

        </View>

        
    )
}

export default EnterToCnpj;