import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

function Vaga(props){
  const navigation = useNavigation();

  const handleSaibaMais = () => {
    navigation.navigate('DetalhesVaga', props);
  };

  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.tituloVaga}>{props.titulo}</Text>
          <TouchableOpacity onPress={handleSaibaMais}>
            <Text>Saiba mais</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Vaga;
