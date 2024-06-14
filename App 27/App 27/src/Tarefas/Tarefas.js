import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Button, TouchableOpacity, Text } from 'react-native';
import api from '../Services/api';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles'

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const carregarTarefas = async () => {
    try {
      const response = await api.get('/tasks');
      setTarefas(response.data);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []); // Não é assíncrono

  const irFormulario = () => {
    navigation.navigate('Formulario', { atualizarLista: carregarTarefas });
  };

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    );
  }

  return (
    <View style={styles.container}>      
      <TouchableOpacity style={styles.buttonIncluir} onPress={irFormulario}>
          <Text style={styles.txtbtnIncluir}>Incluir</Text>
        </TouchableOpacity>
        
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card data={item} funcCarregarTarefas={carregarTarefas} />
        )}
      />
    </View>
  );
}
