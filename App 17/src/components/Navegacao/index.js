import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DadosPessoais from '../../pages/Dados';
import Formacao from '../../pages/Formcacao';
import Experiencia from '../../pages/Experiencia';
import Projetos from '../../pages/Projetos';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dados" component={DadosPessoais} />
      <Tab.Screen name="Formação" component={Formacao} />
      <Tab.Screen name="Experiência" component={Experiencia} />
      <Tab.Screen name="Projetos" component={Projetos} />
    </Tab.Navigator>
  );
};

export default Navigation;
