import React from 'react';
import { View, Text } from 'react-native';

import {styles} from './styles';

const Formacao = () => {
  return (
    <View>
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Tecnologia em Analise e Desenvolvimento de Sistemas</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>01/02/2016 à 05/06/2018</Text>

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Técnico em Programação de Computadores</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>01/08/2014 à 05/12/2015</Text> 
    </View>
  );
};

export default Formacao;
