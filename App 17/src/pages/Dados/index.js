import React from 'react';
import { View, Text, Image } from 'react-native';
import Imagem from '../Imagem';

import {styles} from './styles';

const DadosPessoais = () => {
  return (
    <View style={styles.area}>
    <View>
    <Imagem />      
    <View>          
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
    </View>
  );
};

export default DadosPessoais;
