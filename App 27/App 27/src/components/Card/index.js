import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../../Services/api';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles'

function Card({ data, funcCarregarTarefas }) {
  const { id, title, description } = data;

  const excluirTarefa = async () => {
    try {
      await api.delete(`/tasks/${id}`);
      funcCarregarTarefas(); // Chama a função de carregar tarefas após a exclusão
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const navigation = useNavigation();

  const irFormulario = () => {
    navigation.navigate('Formulario', { id, title, description, atualizarLista: funcCarregarTarefas });
  };

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;
