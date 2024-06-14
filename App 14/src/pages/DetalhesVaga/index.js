import React from 'react';
import { View, Text } from 'react-native';

import {styles} from './styles'

const DetalhesVaga = ({ route }) => {
  const { titulo, salario, descricao, contato } = route.params;

  return (
    <View>
      <Text style={styles.tituloVaga}>{titulo}</Text>
      <Text style={styles.rotuloSalarioVaga}>Salário: {salario}</Text>
      <Text style={styles.rotuloDescricaoVaga}>Descrição: {descricao}</Text>
      <Text style={styles.rotuloContatoVaga}>Contato: {contato}</Text>
    </View>
  );
}

export default DetalhesVaga;
