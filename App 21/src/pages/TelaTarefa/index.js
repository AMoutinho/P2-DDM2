import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';

const TelaTarefa = ({ route, navigation }) => {
  const [task, setTask] = useState({ id: null, name: '' });

  useEffect(() => {
    if (route.params?.task) {
      setTask(route.params.task);
    }
  }, [route.params?.task]);

  const saveTask = async () => {
    let newTasks = [];
    const savedTasks = await AsyncStorage.getItem('tasks');
    if (savedTasks) {
      newTasks = JSON.parse(savedTasks);
    }

    if (task.id) {
      const index = newTasks.findIndex(t => t.id === task.id);
      newTasks[index] = task;
    } else {
      task.id = new Date().getTime();
      newTasks.push(task);
    }

    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Tarefa"
        value={task.name}
        onChangeText={(text) => setTask({ ...task, name: text })}
      />
      <Button title="Salvar Tarefa" onPress={saveTask} />
    </View>
  );
};

export default TelaTarefa;

