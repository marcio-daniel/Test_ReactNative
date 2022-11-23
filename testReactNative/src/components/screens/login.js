import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


import * as Animatable from 'react-native-animatable';

export default function Login() {

  const navigationimc = useNavigation();

  return (
    <View style={styles.container}>
     <Animatable.View animation="fadeInLeft" delay = {500} style={styles.containerHeader}>
      <Text style={styles.message}>Bem-vindo(a)</Text>
     </Animatable.View> 

     <Animatable.View animation="fadeInLeft" delay = {500} style={styles.containerForm}>
      <Text style={styles.title}>Email</Text>
      <TextInput
        placeholder ="Digite seu email"
        style ={styles.input}
      />

      <Text style={styles.title}>Senha</Text>
      <TextInput
        placeholder ="Digite sua senha"
        style ={styles.input}
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigationimc.navigate('Form')}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

     <TouchableOpacity 
     style={styles.buttonregister}
     onPress={ () => navigationimc.navigate('Cadastro')}
     >
        <Text style={styles.registerText}>Não possui uma conta ? Cadastre-se</Text>
     </TouchableOpacity>


     </Animatable.View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8bfaff',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: "#1b065e",
  },
  containerForm:{
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius:25,
    borderTopRightRadius : 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button:{
    backgroundColor: '#1b065e',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonregister:{
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText:{
    color: '#a1a1a1',

  }
});
