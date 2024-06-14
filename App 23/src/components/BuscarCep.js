import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import axios from 'axios';

const BuscarCep = () => {
  const [cep, setCep] = useState('');
  const [item, setItem] = useState({});

  const buscarCep = () => {
    if (cep.length !== 8 || isNaN(cep)) {
      Alert.alert('Erro', 'Por favor, insira um CEP válido com 8 dígitos.');
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Erro', 'Não foi possível buscar o CEP.');
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textCep}>Consulta de CEP</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP..."
          onChangeText={setCep}
          value={cep}
          keyboardType="numeric"
          maxLength={8}
        />
        <Button title="Buscar" onPress={buscarCep} />
        {item.cep && (
          <View style={styles.result}>
            <Text>CEP: {item.cep}</Text>
            <Text>Logradouro: {item.logradouro}</Text>
            <Text>Bairro: {item.bairro}</Text>
            <Text>Cidade: {item.localidade}</Text>
            <Text>Estado: {item.uf}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textCep: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
  },
});

export default BuscarCep;
