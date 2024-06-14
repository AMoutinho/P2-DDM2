import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30
  },

  box:{
    height: 165,
    width: 385,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'black', 
    borderWidth: 3, 
    backgroundColor: 'black',
  },

  tituloVaga:{
    fontSize: 26,
    color: 'purple',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 9,
    marginBottom: 6
  },

  rotuloSalarioVaga:{
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 20,
  },

  salarioVaga:{
    fontSize: 25,
    color: 'black',
    marginTop: -34,
  },

  rotuloDescricaoVaga:{
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
  },

  descricaoVaga:{
    fontSize: 25,
    color: 'black',
    marginTop: -34,
    marginRight: -97,
  },

  rotuloContatoVaga:{
    fontSize: 25,
    color: 'blue',  
    fontWeight: 'bold',  
    marginLeft: 20,
  },

  contatoVaga:{
    fontSize: 25,
    color: 'black',
    marginTop: -34,
    marginRight: -30,
  },

  imagemVaga:{
    width: 80,
    height: 80
  }
})

export {styles}