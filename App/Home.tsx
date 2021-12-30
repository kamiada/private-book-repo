// import React from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export type Props = {
//   name: string;
//   baseEnthusiasmLevel?: number;
// };

// const Home: React.FC<Props> = ({
//   name,
//   baseEnthusiasmLevel = 0
// }) => {
//   const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
//     baseEnthusiasmLevel
//   );

//   const onIncrement = () =>
//     setEnthusiasmLevel(enthusiasmLevel + 1);
//   const onDecrement = () =>
//     setEnthusiasmLevel(
//       enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0
//     );

//   const getExclamationMarks = (numChars: number) =>
//     numChars > 0 ? Array(numChars + 1).join('!') : '';

//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>
//         Hello {name}
//         {getExclamationMarks(enthusiasmLevel)}
//       </Text>
//       <View>
//         <Button
//           title="Increase enthusiasm"
//           accessibilityLabel="increment"
//           onPress={onIncrement}
//           color="blue"
//         />
//         <Button
//           title="Decrease enthusiasm"
//           accessibilityLabel="decrement"
//           onPress={onDecrement}
//           color="red"
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   greeting: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     margin: 16
//   }
// });

// export default Home;

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'HomePage'>;

function HomePage() {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomePage</Text>
      <Button title="BookList" onPress={() => navigation.navigate('BookList')} />
    </View>
  );
}
export default HomePage;