import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Produto from '../components/Produto';
import { useIsFocused } from '@react-navigation/native';

import {styles} from './styles';

const TelaPrincipal = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchProducts = async () => {
      const storedProducts = await AsyncStorage.getItem('products');
      if (storedProducts) setProducts(JSON.parse(storedProducts));
    };

    if (isFocused) {
      fetchProducts();
    }
  }, [isFocused]);

  const saveProducts = async (products) => {
    await AsyncStorage.setItem('products', JSON.stringify(products));
  };

  const handleEditProduct = (id) => {
    const product = products.find(p => p.id === id);
    navigation.navigate('AddProduct', { product });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Produto
            item={item}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaPrincipal;
