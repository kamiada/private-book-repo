import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

// export default function BookList() {
//   return (
//     <View style={styles.container}>
//       <Text>Books</Text>
//     </View>
//   );
// }

const BookList = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

Navigation.registerComponent('BookList', () => BookList);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BookList;