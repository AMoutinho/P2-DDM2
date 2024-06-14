import { View, Text, Image } from 'react-native'

import {styles} from './styles';
import Imagem from '../../assets/AnnonKeyMask.jpg';
function Foto(){

  return(       
      <View style={styles.area}>
      
       <Image style={styles.minhaFoto} source={Imagem}/>

    </View>
  )
}
export default Foto;
    

