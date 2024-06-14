import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  busca:{
    flexDirection: 'row',
    marginTop: 20
  },
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  info:{
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center'
  },
  cep:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  foto:{
    marginTop: 10,
    width: 200,
    height: 200,
  },
  titulo:{
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold'

  }
})

export {styles}