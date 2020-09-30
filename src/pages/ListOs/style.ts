import React from 'react';
import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    scrollView:{
        flex: 1,
        backgroundColor: '#bed9ea',
        width: '95%',
        padding: 7,
        borderRadius: 8,
        marginBottom: 5
    },

    Os:{
        width: '100%',
        height: 95,
        backgroundColor: '#FFF',
        paddingLeft: 5, 
        paddingRight: 5,
        borderRadius: 8,
        marginTop: 7, 
        
         
        

    },

    textSrollView:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 15,
        marginLeft: 5,
        marginTop:2

    }
})

export default style;