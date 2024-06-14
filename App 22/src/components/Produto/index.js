import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import {styles} from './styles';

const Produto = ({ item, onEdit, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name} - {item.quantity}</Text>
      <Button title="Editar" onPress={() => onEdit(item.id)} />
      <Button title="Excluir" onPress={() => onDelete(item.id)} />
    </View>
  );
};

export default Produto;
