import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CafeListScreen from './screens/CafeListScreen';
import CafeDetailsScreen from './screens/CafeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#78350f' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Cafe Explorer' }}
        />
        <Stack.Screen
          name="CafeList"
          component={CafeListScreen}
          options={{ title: 'Cafes' }}
        />
        <Stack.Screen
          name="CafeDetails"
          component={CafeDetailsScreen}
          options={{ title: 'Cafe Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}