import {StyleSheet} from 'react-native';


const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 8, 
        padding: 10

    } ,
    
    textInput:{
        fontFamily: 'Archivo_700Bold', 
        fontSize: 16,
        marginBottom: 5
        
    },

    inputs:{
        width: '100%',
        height: 40,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: '#78BFFF'

    },

    containerMult:{
        
        alignItems: 'center',
        flexDirection: 'row' ,
        justifyContent: 'space-between',

        width: '100%'


    },

    viewMult:{
        width: '49%',

    },

    containerButtons:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15    

    },

    rectButtonRed:{
        backgroundColor: '#DB0000',
        width: 120,
        height:50,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 20

       },  

    rectButtonGreen:{
        backgroundColor: '#00DB12',
        width: 120,
        height:50,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 20
    },

    textButton:{
        fontFamily: 'Nunito_700Bold',
        color: '#FFF'
    }


})

export default style