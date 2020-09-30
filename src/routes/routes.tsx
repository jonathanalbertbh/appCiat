import React, {useContext}from 'react';

import {createStackNavigator} from '@react-navigation/stack';


import RoutesLogin from './signed';
import RoutesDashboard from './dashboard';

import AuthContext from '../contexts/auth';



const Stack = createStackNavigator();

const Routes : React.FC = () =>{

    const {signed} = useContext(AuthContext)

    return(
        
            signed ? <RoutesDashboard /> : <RoutesLogin />
        
    )
}

export default Routes;