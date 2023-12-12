import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text, Alert } from 'react-native';
import { cadastrar } from '../../services/requestsfirebase';

import styleCadastro from './styleCadastro';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  async function realizarCadastro() {
    if (email === '') {
      Alert.alert(
        "Email invalido!",
        "digite um email!"
      );
      return
    }
    if (senha === '') {
      Alert.alert(
        "senha invalido!",
        "digite uma senha!"
      );
      return
    }
    if (confirmaSenha === '') {
      Alert.alert(
        "confirmação de senha invalido!",
        "digite uma senha!"
      );
      return
    }
    if (senha != confirmaSenha) {
      Alert.alert(
        "Senha não compativel",
        "senhas nao confere nos dois campos!"
      );
      return
    }
    await cadastrar(email, senha, confirmaSenha);
    navigation.navigate('Login')
  }


  return (

    <View style={styleCadastro.View}>
      <View style={styleCadastro.ViewCard}>
        <Text style={styleCadastro.titleText}>Novo Usuário</Text>
        <Text style={styleCadastro.labelText}>E-mail</Text>
        <TextInput
          style={styleCadastro.input}
          placeholder="Digite seu e-mail"
          onChangeText={texto => setEmail(texto)}
        />
        <Text style={styleCadastro.labelText}>Senha</Text>
        <TextInput
          style={styleCadastro.input}
          placeholder="Digite sua senha"
          onChangeText={texto => setSenha(texto)}
        />
        <Text style={styleCadastro.labelText}>Confirme Senha</Text>
        <TextInput
          style={styleCadastro.input}
          placeholder="Confirme sua senha"
          onChangeText={texto => setConfirmaSenha(texto)}
        />
        <TouchableOpacity >
          <View style={styleCadastro.button}>
            <Text style={styleCadastro.textbutton} onPress={() => realizarCadastro()}>Cadastrar</Text>
          </View>
        </TouchableOpacity >
      </View>
    </View>
  );
}
