import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Anuncios from './src/pages/MeusAnuncios2.0';
import DetalhesAnuncio from './src/components/Anuncio2.0';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Anuncios">
        <Stack.Screen name="Moutinho Store" component={Anuncios} />
        <Stack.Screen name="Detalhes" component={DetalhesAnuncio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
