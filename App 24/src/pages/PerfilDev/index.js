import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native'
import { useState } from 'react'
import {styles} from './styles'
import api from './../../services/api'

function PerfilDev(){
  const [loginDev, setLoginDev] = useState()
  const [infoDev, setInfoDev] = useState([])
  const [fotoDev, setFotoDev] = useState('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')

    const consultaDev = async (loginDev) => {
      const response = await api.get('/' + loginDev);
      setInfoDev(response.data)
      setFotoDev(response.data.avatar_url)
    }

    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Perfil dos Devs by GitHub</Text>
        <Image
          style={styles.foto}
          source={{uri: fotoDev}}
        />

        <View style={styles.busca}>
          <TextInput
          style={styles.cep}
          value={loginDev}
          placeholder='Digite o login do Dev'
          onChangeText={setLoginDev}
          underlineColorAndroid="transparent"
          />

          <Button title="OK" onPress={() => consultaDev(loginDev)} />
        </View>

        <Text style={styles.info}>{infoDev?.id != undefined ? 'Id: ' + infoDev?.id : ''}</Text>
        <Text style={styles.info}>{infoDev?.name != undefined ? 'Nome: ' + infoDev?.name : ''}</Text>
        <Text style={styles.info}>{infoDev?.public_repos != undefined ? 'Repositórios: ' + infoDev?.public_repos : ''}</Text>
        <Text style={styles.info}>{infoDev?.created_at != undefined ? 'Criado em: ' + infoDev?.created_at : ''}</Text>
        <Text style={styles.info}>{infoDev?.followers != undefined ? 'Seguidores: ' + infoDev?.followers : ''}</Text>
        <Text style={styles.info}>{infoDev?.following != undefined ? 'Seguindo: ' + infoDev?.following : ''}</Text>
      </View>    
    )
  }

export default PerfilDev