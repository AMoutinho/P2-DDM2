import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({  
  
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  labelResultado: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8
  },
  inputResultado:{
    height: 40,
    borderColor: '#ccc',
    backgroundColor: '#d3d3d3',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 31
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
    borderRadius: 8
  },
  tituloApp:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    color: 'blue'
  }
  
});
export {styles}