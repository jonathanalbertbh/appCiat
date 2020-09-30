import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#78B0F1',
        alignItems: 'center', 
        justifyContent:'center'
    },

    imageLogo:{
        width: 200,
        height: 200,
            
    },

    textInput:{
        height: 40,
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems:'center',
        marginTop: 10,
        padding: 10
    },

    textToInput:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        justifyContent:'center',
        marginRight: 275,
        color: '#0D59B1'

    },

    loginButton:{
        width: '40%',
        height: 40,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#00DB12'
    },

    textButton:{
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',

    }
})

export default style;