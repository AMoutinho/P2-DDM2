import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  imagem:{
    width: 311, 
    height: 125,
    alignSelf: 'center',
    margin: 10
  },

  titulo:{
    color: 'blue',
    paddingLeft: 10,
    fontWeight: 'bold',
    margin: 2
  },

  descricao:{
    color: 'purple',
    paddingLeft: 12,
  },

  contatoTelefone:{
    color: 'orange',
    fontWeight: 'bold'
  },

  rotuloContato:{
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 12,
  }  
})

export {styles}