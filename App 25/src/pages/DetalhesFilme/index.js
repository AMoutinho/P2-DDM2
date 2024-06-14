import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {styles} from './styles'

const DetalhesFilme = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.nome}</Text>
      <Text style={styles.synopsis}>{movie.sinopse}</Text>
    </View>
  );
};

export default DetalhesFilme;
