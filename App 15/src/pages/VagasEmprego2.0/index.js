import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Dados = [
  {
    titulo: 'Desenvolvedor React Native',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor Java',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor C-Sharp',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor Go',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor Hack',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor Haskell',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor Delphi',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor NodeJs',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor Cobol',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },

];

function VagasEmprego() {
  const navigation = useNavigation();

  const handleSaibaMais = (item) => {
    navigation.navigate('DetalhesVaga', { item });
  };

  const renderizaItem = ({ item }) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSaibaMais(item)}>
        <Text style={styles.tituloVaga}>{item.titulo}</Text>
        <Text style={styles.btnSaibaMais}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text style={styles.titulo}>Vagas TI Moutinho</Text>
      <View style={styles.tela}>
        <FlatList
          data={Dados}
          renderItem={renderizaItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default VagasEmprego;
