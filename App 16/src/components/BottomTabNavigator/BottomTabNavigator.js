import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dados from '../../pages/Dados';
import Formacao from '../../pages/Formacao';
import Experiencia from '../../pages/Experiencia';
import Projetos from '../../pages/Projetos';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dados Pessoais" component={Dados}
      options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person-outline" size={size} color={color} />
    ),
  }} />
      <Tab.Screen name="Formação" component={Formacao}
       options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="school-outline" size={size} color={color} />
    ),
  }} />
      <Tab.Screen name="Experiência" component={Experiencia}
      options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="briefcase-outline" size={size} color={color} />
    ),
  }} />
      <Tab.Screen name="Projetos" component={Projetos}
      options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="folder-open-outline" size={size} color={color} />
    ),
  }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
