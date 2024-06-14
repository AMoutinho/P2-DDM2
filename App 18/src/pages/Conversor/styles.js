import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },

  input: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    margin: 8,
    color: 'blue'
  },

  rotuloConversao:{
    color: 'blue',
    fontWeight: 'bold'
  },

  btnConfirmar:{
      marginTop: 10,
      marginBottom: 15,
      width:115,
      height:35,
      alignSelf: 'center',
      backgroundColor: 'blue',
      borderRadius: 10,
    },  

    buttonText:{
      color: 'white',
      fontSize: 22,
      textAlign: 'center',
    }, 

    resultadoConversao:{
      color: 'red',
    }

  })


export {styles};