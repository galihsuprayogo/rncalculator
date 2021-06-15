import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home } from '../pages';

const Stack = createStackNavigator();

const Router = () => (
 <Stack.Navigator initialRouteName="Splash">
  <Stack.Screen
    name="Splash"
    component={Splash}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="Home"
    component={Home}
    options={{ headerShown: false }}
  />
 </Stack.Navigator>
);

export default Router;
