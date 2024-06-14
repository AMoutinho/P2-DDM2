import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';

import {styles} from './styles'

const Vaga = (props) => {
  return (
    <View>
      <Text>{props.titulo}</Text>
      <Pressable style={styles.btnSaibaMais} onPress={props.onPress}>
        <Text style={styles.txtBtn}>Saiba mais</Text>
      </Pressable>

    </View>
  );
}

export default Vaga;
