import React from 'react';
import { View, Text } from 'react-native';

import {styles} from './styles';

const Experiencia = () => {
  return (
    <View>
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Téc. em Informática e Desenvolvedor</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>01/01/2015 até o momento</Text>

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Designer de Mídias Digitais</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>01/06/2022 à 21/08/2023</Text> 

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Analista de Suporte Técnico</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>21/03/2022 à 21/06/2022</Text> 

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Professor de Informática</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>15/02/2016 à 20/03/2017</Text> 
    </View>
  );
};

export default Experiencia;
