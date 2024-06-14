import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VagasEmprego from './src/pages/VagasEmprego2.0';
import DetalhesVaga from './src/pages/DetalhesVaga';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Vagas de Emprego" component={VagasEmprego} />
        <Stack.Screen name="DetalhesVaga" component={DetalhesVaga} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
