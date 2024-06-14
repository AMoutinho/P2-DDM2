import React from 'react';
import { View, Text } from 'react-native';
import Imagem from '../Imagem';

import {styles} from './style'

const Dados = () => {
  return (
    <View style={styles.area}>
    <View>      
      
      <Imagem />
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Nome</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>André Moutinho</Text>
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Idade</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>31 anos</Text> 

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Data de Nascimento</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>15/03/1993</Text> 

      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Profissão</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Autônomo na área de TI</Text>   

    </View>
    </View>
  );
};

export default Dados;
