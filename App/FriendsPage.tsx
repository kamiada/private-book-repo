import React, { FC, ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type myProps = {
}

const FriendsPage: FC<myProps> = ({}): ReactElement => {
    return (
        <View style={styles.container}>
          <Text>Friends Page</Text>
        </View>

    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default FriendsPage;