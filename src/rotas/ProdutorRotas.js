import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../telas/Home";
import Produtor from '../telas/Produtor';
import Cesta from '../telas/cesta';

const Stack = createStackNavigator();

export default function RotasProdutor({ ComponentePrincipal = Home}){
    return  <Stack.Navigator screenOptions={ {headerShown: false} }>
                <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
                <Stack.Screen name="Produtor" component={Produtor} />
                <Stack.Screen name="Cesta" component={Cesta} />
            </Stack.Navigator>
};

