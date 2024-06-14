import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

import {styles} from './styles'

const ConversorAPI = () => {
  const [value, setValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BRL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedValue, setConvertedValue] = useState('');

  useEffect(() => {
    if (value && fromCurrency && toCurrency) {
      convertCurrency();
    }
  }, [value, fromCurrency, toCurrency]);

  const convertCurrency = async () => {
    try {
      let conversionRate = 1;
      if (fromCurrency === 'BRL' && toCurrency !== 'BRL') {
        const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${toCurrency}-BRL`);
        conversionRate = parseFloat(response.data[`${toCurrency}BRL`].ask);
      } else if (fromCurrency !== 'BRL' && toCurrency === 'BRL') {
        const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${fromCurrency}-BRL`);
        conversionRate = 1 / parseFloat(response.data[`${fromCurrency}BRL`].ask);
      } else if (fromCurrency !== 'BRL' && toCurrency !== 'BRL') {
        const responseFrom = await axios.get(`https://economia.awesomeapi.com.br/json/last/${fromCurrency}-BRL`);
        const responseTo = await axios.get(`https://economia.awesomeapi.com.br/json/last/${toCurrency}-BRL`);
        const rateFrom = parseFloat(responseFrom.data[`${fromCurrency}BRL`].ask);
        const rateTo = parseFloat(responseTo.data[`${toCurrency}BRL`].ask);
        conversionRate = rateTo / rateFrom;
      }
      const result = parseFloat(value) * conversionRate;
      setConvertedValue(result.toFixed(2).toString());
    } catch (error) {
      console.error(error);
      setConvertedValue('Erro na conversão');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloApp}>Conversor API de Moedas</Text>
      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
      <Text style={styles.label}>De:</Text>
      <Picker
        selectedValue={fromCurrency}
        onValueChange={(itemValue) => setFromCurrency(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Real" value="BRL" />
        <Picker.Item label="Dólar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="BitCoin" value="BTC" />
      </Picker>
      <Text style={styles.label}>Para:</Text>
      <Picker
        selectedValue={toCurrency}
        onValueChange={(itemValue) => setToCurrency(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Real" value="BRL" />
        <Picker.Item label="Dólar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="BitCoin" value="BTC" />
      </Picker>
      <Text style={styles.labelResultado}>Valor Convertido</Text>
      <TextInput
        style={styles.inputResultado}
        editable={false}
        value={convertedValue}
      />
    </View>
  );
};

export default ConversorAPI;
