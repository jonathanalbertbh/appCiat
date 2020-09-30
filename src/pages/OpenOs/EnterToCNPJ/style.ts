import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#78B0F1',
       
        
    },

    box:{
        backgroundColor:'white',
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#78B0F1',
        borderRadius: 10

    },

    textInput:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 25,
        color: '#FFF',
        marginBottom: 50
    },


    

    input:{
        fontFamily: 'Nunito_700Bold',
        width: '60%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius:8,
        alignItems:'center',
        justifyContent: 'center',
        paddingHorizontal: 20
        },

    button:{

        backgroundColor: '#00DB12',

        marginTop: 40,
        width: 100,
        height:70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',


        
    },

    textButton:{
        fontFamily: 'Nunito_700Bold',
        color: '#FFF',
        fontSize: 18
    },
})


export default style;