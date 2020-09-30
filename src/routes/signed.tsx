import React from 'react';

import {createStackNavigator} from  '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../pages/Login/index';

const AuthRoutes: React.FC = () =>{
    return(
        <Stack.Navigator initialRouteName = "login" >
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;