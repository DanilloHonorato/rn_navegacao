import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RotasProdutor from "./ProdutorRotas";
import MelhoresProdutoresRotas from "./MelhoresProdutoresRotas";

import coracao from "../assets/coracao.svg";
import home from "../assets/home.svg";

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return <NavigationContainer>
                <Tab.Navigator 
                screenOptions={({route}) =>  ({
                    headerShown: false,
                    tabBarIcon: ({color}) => {
                        let Icon = home;

                        if (route.name === 'Melhores Produtores') {
                            Icon = coracao;
                        };

                        return <Icon color={color}/>
                    },
                    tabBarActiveTintColor: "#2A9F85", 
                    tabBarInactiveTintColor: "#C7C7C7"}
                )}>
                    <Tab.Screen name="Home" component={RotasProdutor} tabBarActiveTintColor="green"/>
                    <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
                </Tab.Navigator>
            </NavigationContainer>
};

