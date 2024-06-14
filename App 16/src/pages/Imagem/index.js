import { View, Text, Image } from 'react-native'

import {styles} from './style';
import Imagem from '../../assets/AnonKeyMask.jpg';

function Foto(){

  return(       
      <View style={styles.area}>
      
       <Image style={styles.minhaFoto} source={Imagem}/>

    </View>
  )
}
export default Foto;
    

