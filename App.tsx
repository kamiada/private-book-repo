import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookList from './App/BookList';
import HomePage from './App/Home';
import {RootStackParamList} from './App/RootStackParams';
import FriendsPage from './App/FriendsPage';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="Friends" component={FriendsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}