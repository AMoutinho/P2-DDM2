import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import {styles} from './styles'

function Anuncios({ navigation }) {
  const anuncios = [
    { id: 1, titulo: 'Ferrari SF90 Spider', linha1: 'Modelo na cor amarelo mostarda', linha2: '0km', linha3: 'A melhor aquisição', linha4: 'Preço bem acessível', linha5: 'Contato', linha6: '(13) 3248-6322', imagem: require('../../assets/imagem1.jpg') },
    { id: 2, titulo: 'Lamborghini Aventador', linha1: 'Modelo na cor amarelo black piano', linha2: 'único dono', linha3: 'A melhor aquisição', linha4: 'Preço imbatível', linha5: 'Contato', linha6: '(13) 3222-6555', imagem: require('../../assets/imagem2.jpg') },
    { id: 3, titulo: 'Porsche 911 S', linha1: 'Modelo na cor prata', linha2: 'único dono', linha3: 'Uma verdadeira máquina', linha4: 'Preço surpreendente', linha5: 'Contato', linha6: '(13) 3222-6555', imagem: require('../../assets/imagem3.jpg') },
    { id: 4, titulo: 'Mercedez Benz AMG', linha1: 'Modelo na cor prata', linha2: 'único dono', linha3: 'Um luxo sobre rodas', linha4: 'Preço surpreendente', linha5: 'Contato', linha6: '(13) 3222-6555', imagem: require('../../assets/imagem4.jpg') },
    
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {anuncios.map((anuncios) => (
        <TouchableOpacity key={anuncios.id} onPress={() => navigation.navigate('Detalhes', anuncios)}>
          <View>
            <Image style={styles.imagemAnuncio} source={anuncios.imagem}  />
            <Text style={styles.tituloAnuncio}>{anuncios.titulo}</Text>
            <TouchableOpacity style={styles.btnVerDetalhes} onPress={() => navigation.navigate('Detalhes', anuncios)}>
              <Text style={styles.txtbtnVerDetalhes}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    
  );
}

export default Anuncios;
