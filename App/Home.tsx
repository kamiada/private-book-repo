import React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Home: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel
  );

  const onIncrement = () =>
    setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(
      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0
    );

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <Pressable style={styles.homepage_buttons} onPress={() => console.log('test')}>
        <Text style={styles.homepage_buttons_text}>See your reading list</Text>
      </Pressable>
      <Pressable style={styles.homepage_buttons} onPress={() => console.log('test')}>
        <Text style={styles.homepage_buttons_text}>Manage your friends</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homepage_buttons: {

  },
  homepage_buttons_text: {

  }
});

export default Home;