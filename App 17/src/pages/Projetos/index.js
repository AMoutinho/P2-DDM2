import React from 'react';
import { View, Text } from 'react-native';

import {styles} from './styles';

const Projetos = () => {
  return (
    <View>
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Radix</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Sistema de delivery para produtos orgânicos</Text>

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Sysorder</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Sistema de Gerenciamento Comercial</Text> 

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>SigOS</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Sistema de Gestão de Ordem de Serviço</Text> 
    </View>
  );
};

export default Projetos;
