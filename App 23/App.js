import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BuscarCep from './src/components/BuscarCep';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CEP x Endereço" component={BuscarCep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
