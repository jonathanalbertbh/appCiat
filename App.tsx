import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { AppLoading } from 'expo';

import Routes from './src/routes/routes';

import {useFonts, Nunito_700Bold} from '@expo-google-fonts/nunito';
import {Archivo_700Bold} from '@expo-google-fonts/archivo';
import { StatusBar } from 'expo-status-bar';



export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Archivo_700Bold
  })
  
  if(!fontsLoaded){
    return <AppLoading/>;
  }else{
    return (
      <NavigationContainer >
        <Routes/>
        <StatusBar style="light"/> 
      </NavigationContainer>
    )
  }

  
}


