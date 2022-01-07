import React, { FC, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

const d = new Date();
let year = d.getFullYear();

type myProps = {
  booklist: Array<String>;
}


const BookList: FC<myProps> = ({booklist}): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Books you read in {year}</Text>
        {booklist  && {

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