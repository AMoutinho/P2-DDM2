import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({  
  
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    padding: 15,
  },
  descricao: {
    fontSize: 15,
    padding: 10,
  },
  buttonEditar: {
    backgroundColor: 'green',
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'flex-start',    
    marginVertical: 0,
    marginLeft: 10,
    height: 25,
    width: 65,
    textAlign: 'center',
  },
  buttonExcluir: {
    backgroundColor: 'tomato',
    borderRadius: 8,
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginVertical: 0,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 25,
    width: 65,
    textAlign: 'center',
    borderColor: 'gray',
    color: 'white'
  },
  
});
export {styles}