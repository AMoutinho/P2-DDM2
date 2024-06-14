import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

import {styles} from './styles'

const TelaPrincipal = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://sujeitoprogramador.com/r-api/?api=filmes')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.nome}</Text>
      <Image source={{ uri: item.foto }} style={styles.image} />
      <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item })}>
        <Text style={styles.link}>Leia Mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TelaPrincipal;
