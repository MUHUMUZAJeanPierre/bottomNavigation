import * as React from 'react';

//screen
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

// bottom navigator

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function MyTab(){
    return (
        <NavigationContainer 
        
        >
            <Tab.Navigator>
                <Tab.Screen 
                name='Home' k
                component={HomeScreen}
                options={{
                    tabBarIcon: ()=>
                        <AntDesign name='home' size={25} />
                    
                }} 
                    
                 />
                <Tab.Screen name='Search' component={SearchScreen} />
                <Tab.Screen name='Profile' component={ProfileScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}