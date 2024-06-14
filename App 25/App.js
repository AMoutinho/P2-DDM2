import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './src/pages/TelaPrincipal';
import DetalhesFilme from './src/pages/DetalhesFilme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaPrincipal} options={{ title: 'Catálogo de Filmes' }} />
        <Stack.Screen name="Details" component={DetalhesFilme} options={{ title: 'Detalhes do Filme' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
