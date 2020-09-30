import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import { View,ScrollView, Text, FlatList } from 'react-native';


import style from './style';
import Footer from '../../components/Footer';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../connections/ConnectionApi/index';



export interface itemslistOs {
    id: number,
    nome_fantasia: string,
    tecnico: string,
    data_abertura: string

}

function listOs(){

    const [listAllOs, setListAllos] = useState([]);

    useEffect(() =>{
        api.get('osopen').then(response =>{
            
            setListAllos(response.data)
        })
    },[])
    

    return(
        <View style={style.container}  >
            <PageHeader />

            <ScrollView
            style={style.scrollView} >
        
       {listAllOs.map((os : itemslistOs) =>{
           return(
            <RectButton 
            key={os.id}
            style={style.Os}>
            <Text style={style.textSrollView}>Nome Fantasia: {os.nome_fantasia} </Text>
            <Text style={style.textSrollView}>Abertura: {os.data_abertura}</Text>
        <Text style={style.textSrollView}>Técnico: {os.tecnico} </Text>
        </RectButton>
           )
       })}                                
            </ScrollView>

            <Footer />
        </View>
    )
}

export default listOs;