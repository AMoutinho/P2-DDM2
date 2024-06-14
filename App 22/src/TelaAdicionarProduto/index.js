import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';

const TelaAdicionarProduto = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [products, setProducts] = useState([]);
  const { product } = route.params || {};

  useEffect(() => {
    const fetchProducts = async () => {
      const storedProducts = await AsyncStorage.getItem('products');
      if (storedProducts) setProducts(JSON.parse(storedProducts));
    };

    fetchProducts();

    if (product) {
      setName(product.name);
      setQuantity(product.quantity.toString());
    }
  }, []);

  const saveProducts = async (products) => {
    await AsyncStorage.setItem('products', JSON.stringify(products));
  };

  const handleSave = () => {
    if (product) {
      // Update existing product
      const updatedProducts = products.map(p =>
        p.id === product.id ? { ...p, name, quantity: parseInt(quantity) } : p
      );
      setProducts(updatedProducts);
      saveProducts(updatedProducts);
    } else {
      // Add new product
      const newProduct = {
        id: Math.random().toString(),
        name,
        quantity: parseInt(quantity)
      };
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      saveProducts(updatedProducts);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default TelaAdicionarProduto;

