import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  titulo:{
    fontSize: 41,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  tela:{
    marginTop: 100
  },

  btnSaibaMais:{
    height: 31,
    width: 100,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    backgroundColor:'blue',
    borderRadius: 5,
    padding: 4,
    marginTop: 4,
    marginRight: '70%'
  },

  tituloVaga:{
    color: 'purple',
    marginLeft: '3%',
    fontWeight: 'bold',
    marginTop:15
  }
})

export {styles}