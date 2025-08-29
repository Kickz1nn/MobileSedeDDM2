import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [name, setNome] = React.useState('');
  const [imagem, setImagem] = React.useState(require('./assets/img/img01.jpg'))

  function trocarImagem(){
    if (imagem == "Andrey"){
      setImagem(require('./assets/img/img01.jpg'));
    }
    if (imagem == "Chinecar"){
      setImagem(require('./assets/img/img02.jpg'));
    }
      if (imagem == "Cabresa"){
        setImagem(require('./assets/img/img03.jpg'));
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{ 
          fontSize: 30, 
          color: 'blue',
          fontWeight: 'bold',
          marginBottom: 20 }}
      >Nome:</Text> 
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
          width: '80%',
        }}
          onChangeText={(value) => setImagem(value)}
        placeholder="Digite seu nome"
      />
      <Pressable style={{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      }}


      onPress={() => trocarImagem()}>


        <Text>VER</Text>
      </Pressable>
        {
           name.length ? <Text style={{marginTop: 20, fontSize: 20}}
           >Olá, {name}!</Text> : null
        }
        <Image source={imagem}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
