import {StyleSheet, DevSettings} from 'react-native';


const style = StyleSheet.create({
    container:{

        flex: 1,
        alignItems: 'center',
    },
    containerMenu:{
        flex:1,
        borderRadius:8,
        backgroundColor: '#FFF',
        alignItems:'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },

    buttonsMenu:{
        backgroundColor: '#78B0F1',
        width: 140,
        height: 140,
        borderRadius: 10,
        margin: 20,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },

    viewIcon:{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius:40,
        

    },
    textButton:{
        fontFamily: 'Nunito_700Bold',
        color: '#FFF'
    }
    
})

export default style;