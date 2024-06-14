import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({  
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayMode: {
    backgroundColor: '#fff',
  },
  nightMode: {
    backgroundColor: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '80%',
    color: 'gray',
    textAlign: 'center'
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginRight: 10,
    color: 'gray',
  },
  displayText: {
    marginTop: 20,
    fontSize: 20,
    color: 'orange',
    padding: 10,
  },
  smallFont: {
    fontSize: 16,
  },
  largeFont: {
    fontSize: 20,
  }
  
});
export {styles}