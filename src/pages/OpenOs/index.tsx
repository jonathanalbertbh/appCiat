import React from 'react';


import style from './style';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';

import Footer from '../../components/Footer';
import FormRegister from '../../components/FormRegister';




// npm install @react-native-community/picker --save


function OpenOs(){
    return(
        <View style={style.container}>
            <PageHeader />

            <ScrollView
            style={style.scrollView}
            >
            
                <FormRegister/>
                       

            </ScrollView>

            <Footer />
        </View>
    )
}

export default OpenOs;