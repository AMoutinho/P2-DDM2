import React from 'react';
import { View, Text, Image } from 'react-native';

import {styles} from './styles'

function DetalhesAnuncio({ route }) {
  const { titulo, linha1, linha2, linha3, linha4, linha5, linha6, imagem } = route.params;
  
  return (
    <View>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{linha1}</Text>
      <Text style={styles.descricao}>{linha2}</Text>
      <Text style={styles.descricao}>{linha3}</Text>
      <Text style={styles.descricao}>{linha4}</Text>
      <Text style={styles.rotuloContato}>{linha5}: <Text style={styles.contatoTelefone}>{linha6}</Text></Text>
    </View>
  );
}

export default DetalhesAnuncio;
