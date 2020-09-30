import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
        backgroundColor: '#0D59B1',
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 15,
        marginBottom: 10
        
    },

    logOutButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#78B0F1',
        width: 40,
        height: 40,
        borderRadius: 40,

    },

    imageLogo:{
        width: 100,
        height: 100
    },

    textButton:{
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Archivo_700Bold'

    },



    //=============================//

    /**
     * estilo para o modal
     */

    

    modalContainer:{
        width: '90%',
        height: 150,

        alignItems: 'center',
        justifyContent: 'center'

    },

    viewModalContainer:{
        
        height: 130,
        backgroundColor: '#78B0F1',
        padding: 20,

        borderRadius: 10

    },

    textModal:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#000',
        marginBottom: 20,



    },

    buttonsModal:{  

    },

    viewButtonsModal:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'


    },

   

    rectButtonRed:{
        backgroundColor: '#DB0000',
        width: 100,
        height:40,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 20

       },  

    rectButtonGreen:{
        backgroundColor: '#00DB12',
        width: 100,
        height:40,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 20
    },

    textButtonModal:{
        fontFamily: 'Nunito_700Bold',
        color: '#FFF'
    }
})

export default style;