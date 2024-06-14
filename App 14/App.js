// App.js
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VagasEmprego from './src/pages/VagasEmprego';
import DetalhesVaga from './src/pages/DetalhesVaga';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VagasEmprego" component={VagasEmprego} />
        <Stack.Screen name="DetalhesVaga" component={DetalhesVaga} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
