import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login/indexLogin';
import Cadastro from './screens/Cadastro/indexCadastro';
import Principal from './screens/Principal/indexPrincipal';

const Tab = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}