import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, Text, View, Image, TextInput } from 'react-native';
import styles from './assets/css/style.js';
 
export default function App() {
  const [name, setNome] = React.useState('');
  const [imagem, setImagem] = React.useState(require('./assets/img/img01.jpg'));
 
  function trocarImagem() {
    if (name === "Andrey") {
      setImagem(require('./assets/img/img01.jpg'));
    }
    if (name === "Chinecar") {
      setImagem(require('./assets/img/img02.jpg'));
    }
    if (name === "Cabresa") {
      setImagem(require('./assets/img/img03.jpg'));
    }
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nome:</Text>
 
      <TextInput
        style={styles.input}
        onChangeText={(value) => setNome(value)}
        placeholder="Digite seu nome"
      />
 
      <Pressable style={styles.botao} onPress={trocarImagem}>
        <Text style={styles.textoBotao}>VER</Text>
      </Pressable>
 
      {name.length ? <Text style={styles.saudacao}>Olá, {name}!</Text> : null}
 
      <Image source={imagem} style={styles.imagem} />
    </View>
  );
}