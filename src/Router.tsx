import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from './Pages/Detail';
import Home from './Pages/Home';

export type RootStackProps = {
  Home: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackProps>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'ALUGUE',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name='shopping-bag' size={24} color='#000' />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{
            title: 'Detalhes',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name='shopping-bag' size={24} color='#000' />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
