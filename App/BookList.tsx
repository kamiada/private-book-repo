import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

const d = new Date();
let year = d.getFullYear();


const BookList = () => {
  return (
    <View style={styles.container}>
      <Text>Books you read in {year}</Text>
        {booklist 0 && {

        }}
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