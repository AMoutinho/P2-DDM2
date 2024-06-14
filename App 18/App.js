import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import ConvertScreen from './src/pages/Conversor';
import { Ionicons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Real para Dólar" component={ConvertScreen}
      initialParams={{ currency: 'USD' }}
      options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="logo-usd" size={size} color={color} />
    ),
  }}
/>

<Tab.Screen name="Real para Euro" component={ConvertScreen}
      initialParams={{ currency: 'EUR' }}
      options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="logo-euro" size={size} color={color} />
    ),
  }}
/>

        <Tab.Screen name="Real para BitCoin" component={ConvertScreen} initialParams={{ currency: 'BTC' }} 
        options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="logo-bitcoin" size={size} color={color} />
    ),
  }}
        
        />




      </Tab.Navigator>
    </NavigationContainer>
  );
}
