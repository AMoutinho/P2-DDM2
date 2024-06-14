import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Vaga from '../../components/Vagas'; 

const vagas = [
  { titulo: 'Desenvolvedor React Native', salario: 'R$ 15.000,00', descricao: 'Presencial em SP', contato: '(13) 3248-6322' },
  { titulo: 'Desenvolvedor Kotlin Júnior', salario: 'R$ 35.000,00', descricao: 'Vaga 100% remota', contato: '(13) 3222-6555' },
  { titulo: 'Desenvolvedor Hack Júnior', salario: 'R$ 45.000,00', descricao: 'Presencial em MG', contato: '(13) 3985-3782' },
  { titulo: 'Desenvolvedor Cobol Sênior', salario: 'R$ 85.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Java Sênior', salario: 'R$ 95.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Next Sênior', salario: 'R$ 495.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor SQL Júnior', salario: 'R$ 295.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Assembly Sênior', salario: 'R$ 195.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor NodeJS Sênior', salario: 'R$ 15.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Dart Sênior', salario: 'R$ 35.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Go', salario: 'R$ 9.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor MySQL', salario: 'R$ 5.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Postgress', salario: 'R$ 12.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Python Sênior', salario: 'R$ 95.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor Delphi Júnior', salario: 'R$ 1.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor F-Sharp Sênior', salario: 'R$ 595.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor C-Sharp Sênior', salario: 'R$ 95.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' },
  { titulo: 'Desenvolvedor PHP Sênior', salario: 'R$ 1.100.000,00', descricao: 'Vaga 100% remota', contato: '(11) 4081-3082' }
];


const VagasEmprego = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        {vagas.map((vaga, index) => (
          <View key={index}>
            <Vaga
              titulo={vaga.titulo}
              linha1={`Salário: ${vaga.salario}`}
              linha2={`Descrição: ${vaga.descricao}`}
              linha3={`Contato: ${vaga.contato}`}
              onPress={() => navigation.navigate('DetalhesVaga', vaga)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default VagasEmprego;
