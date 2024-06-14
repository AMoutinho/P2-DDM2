import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
    flex: 1,
    padding: 16,
  },
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
  },
  editButton: {
    marginRight: 8,
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#dc3545',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    backgroundColor: '#28a745',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
    
   
});
export {styles}