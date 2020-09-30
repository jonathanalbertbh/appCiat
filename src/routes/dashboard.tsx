import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListOs from '../pages/ListOs/index';
import MainMenu from '../pages/MainMenu/index';
import OpenOs from '../pages/OpenOs/index';
import EnterToCnpj from '../pages/OpenOs/EnterToCNPJ/index';
 

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="Listos" component={ListOs} />
            <Stack.Screen name="OpenOs" component={OpenOs} />
            <Stack.Screen name="EnterToCnpj" component={EnterToCnpj} />
        </Stack.Navigator>
    )
}

export default AppRoutes;