import React from 'react';
import { Button, StyleSheet, Text, View, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'HomePage'>;

function HomePage() {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={styles.container}>

      <Text>User Profile</Text>
      <Pressable style={styles.buttons_homePage} onPress={() => navigation.navigate('BookList')}>
        <Text>BookList</Text>
      </Pressable>

      <Pressable style={styles.buttons_homePage} onPress={() => navigation.navigate('Friends')}>
        <Text>Friends</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D29D79',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  buttons_homePage: {
    borderWidth: 2,
    borderColor: '#170E08',
    padding: 10,
    margin: 10,
    display: 'flex'
  }
});
export default HomePage;