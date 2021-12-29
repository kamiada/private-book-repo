// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './App/Home';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" /> */}
//       <Home />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookList from './App/BookList';
import Home from './App/Home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="BookList" component={BookList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};