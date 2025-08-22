import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [name, setNome] = React.useState('');

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
          onChangeText={(value) => setNome(value)}
        placeholder="Digite seu nome"
      />
      <Pressable style={{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      }}
      onPress={() => alert('Nome enviado!')}>


        <Text style={{ color: 'white' }}>VER</Text>
      </Pressable>
        {
           name ? <Text style={{marginTop: 20, fontSize: 20}}
           >Olá, {name}!</Text> : null
        }
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
