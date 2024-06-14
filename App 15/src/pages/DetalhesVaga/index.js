import React from 'react';
import { View, Text } from 'react-native';

import {styles} from './styles'

function DetalhesVaga({ route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.tituloVaga}>{item.titulo}</Text>
      <Text style={styles.rotuloSalarioVaga}>{item.linha1}</Text>
      <Text style={styles.salarioVaga}>{item.linha2}</Text>
      <Text style={styles.rotuloDescricaoVaga}>{item.linha3}</Text>
      <Text style={styles.descricaoVaga}>{item.linha4}</Text>
      <Text style={styles.rotuloContatoVaga}>{item.linha5}</Text>
      <Text style={styles.contatoVaga}>{item.linha6}</Text>
    </View>
  );
}

export default DetalhesVaga;
