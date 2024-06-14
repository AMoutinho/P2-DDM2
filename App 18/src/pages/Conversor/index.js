import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

import {styles} from './styles.js';

export default function ConvertScreen({ route }) {
  const { currency } = route.params;
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
    let conversionRate = 0;
    
    switch (currency) {
      case 'USD':
        conversionRate = 0.19; 
        break;
      case 'EUR':
        conversionRate = 0.18; 
        break;
      case 'BTC':
        conversionRate = 0.0000030; 
        break;
      default:
        conversionRate = 1; 
    }

    const converted = parseFloat(amount) * conversionRate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.rotuloConversao}>Converter Real para {currency}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor em R$"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.btnConfirmar} onPress={convertCurrency}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity> 
      {convertedAmount ? <Text style={styles.resultadoConversao}>Valor convertido: {convertedAmount} {currency}</Text> : null}
    </View>
  );
}