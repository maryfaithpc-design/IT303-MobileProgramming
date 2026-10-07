import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShoeListScreen from './screens/ShoeListScreen';
import ShoeDetailsScreen from './screens/ShoeDetailsScreen';
import { colors } from './theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.ink },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Brand Shoes' }} />
        <Stack.Screen
          name="ShoeList"
          component={ShoeListScreen}
          options={({ route }) => ({ title: route.params.brand })}
        />
        <Stack.Screen
          name="ShoeDetails"
          component={ShoeDetailsScreen}
          options={({ route }) => ({ title: route.params.shoe.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}