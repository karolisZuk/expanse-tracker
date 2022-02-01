import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Home } from './Screens';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
