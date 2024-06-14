import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles'

const VisualizadorDeFrase = () => {
  const [phrase, setPhrase] = useState('');
  const [isDayMode, setIsDayMode] = useState(true);
  const [isSmallFont, setIsSmallFont] = useState(false);

  useEffect(() => {
    loadPreferences();
  }, []);

  useEffect(() => {
    savePreferences();
  }, [isDayMode, isSmallFont, phrase]);

  const loadPreferences = async () => {
    try {
      const storedPhrase = await AsyncStorage.getItem('phrase');
      const dayMode = await AsyncStorage.getItem('isDayMode');
      const smallFont = await AsyncStorage.getItem('isSmallFont');
      if (storedPhrase !== null) {
        setPhrase(storedPhrase);
      }
      if (dayMode !== null) {
        setIsDayMode(JSON.parse(dayMode));
      }
      if (smallFont !== null) {
        setIsSmallFont(JSON.parse(smallFont));
      }
    } catch (error) {
      console.error('Error loading preferences:', error);
    }
  };

  const savePreferences = async () => {
    try {
      await AsyncStorage.setItem('phrase', phrase);
      await AsyncStorage.setItem('isDayMode', JSON.stringify(isDayMode));
      await AsyncStorage.setItem('isSmallFont', JSON.stringify(isSmallFont));
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };

  const toggleDayMode = () => {
    setIsDayMode(previousState => !previousState);
  };

  const toggleFont = () => {
    setIsSmallFont(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDayMode ? styles.dayMode : styles.nightMode]}>
      <TextInput
        style={styles.input}
        placeholder="Frase"
        onChangeText={text => setPhrase(text)}
        value={phrase}
      />
      <View style={styles.switchRow}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Dia</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDayMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleDayMode}
            value={isDayMode}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Pequeno</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSmallFont ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleFont}
            value={isSmallFont}
          />
        </View>
      </View>
      <Text style={[styles.displayText, isSmallFont ? styles.smallFont : styles.largeFont]}>{phrase}</Text>
    </View>
  );
};

export default VisualizadorDeFrase;