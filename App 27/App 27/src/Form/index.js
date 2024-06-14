import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../Services/api';

import {styles} from './styles'

export default function Form({ route }) {
  const [id, setId] = useState(route.params?.id);
  const [newTitle, setNewTitle] = useState(route.params?.title);
  const [newDescription, setNewDescription] = useState(route.params?.description);
  const navigation = useNavigation();

  const salvarTarefa = async () => {
    try {
      const body = { title: newTitle, description: newDescription };

      if (id !== undefined) {
        await api.put(`/tasks/${id}`, body);
      } else {
        await api.post('/tasks', body);
      }

      if (route.params?.atualizarLista) {
        route.params.atualizarLista();
      }

      navigation.goBack();
       } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        defaultValue={route.params?.title}
        onChangeText={text => setNewTitle(text)}
      />

      <TextInput
        style={styles.input}
        defaultValue={route.params?.description}
        onChangeText={text => setNewDescription(text)}
      />

      <Button title="Salvar" onPress={salvarTarefa} />
    </View>
  );
}
