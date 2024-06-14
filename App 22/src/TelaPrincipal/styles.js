import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

container: {
    flex: 1,
    padding: 10
  },

  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },

  addButtonText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 30, // Ensure the text is vertically centered
  },
   
});
export {styles}