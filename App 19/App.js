import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ConvertScreen from './src/pages/Conversor';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dólar" component={ConvertScreen} initialParams={{ currency: 'USD' }} />
        <Tab.Screen name="Euro" component={ConvertScreen} initialParams={{ currency: 'EUR' }} />
        <Tab.Screen name="Bitcoin" component={ConvertScreen} initialParams={{ currency: 'BTC' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
