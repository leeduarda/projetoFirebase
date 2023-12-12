import React, { useState } from 'react';
import { TextInput, TouchableOpacity , View, StyleSheet, Text } from 'react-native';

import styleLogin from './styleLogin';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (

    <View style={styleLogin.View}>
      <View style={styleLogin.ViewCard}>
        <Text style={styleLogin.titleText}>Entrar</Text>
        <Text style={styleLogin.labelText}>E-mail:</Text>
        <TextInput
          style={styleLogin.input}
          placeholder="Digite seu e-mail"
         
        />
        <Text style={styleLogin.labelText}>Senha</Text>
        <TextInput
          style={styleLogin.input}
          placeholder="Digite sua senha"
          secureTextEntry={!showPassword}
          
        />
        <TouchableOpacity onPress={() => { navigation.navigate('Principal') }}>
          <View style={styleLogin.button}>
            <Text style={styleLogin.textbutton}>Entrar</Text>
          </View>
        </TouchableOpacity >
        <Text style={styleLogin.labelText2}>Não possui uma conta?</Text>
        <TouchableOpacity  onPress={() => { navigation.navigate('Cadastro') }}>
          <View style={styleLogin.buttonCadastro}>
            <Text style={styleLogin.textbuttonCadastro}>Cadastre-se</Text>
          </View>
        </TouchableOpacity >
      </View>
    </View>
  );
}
