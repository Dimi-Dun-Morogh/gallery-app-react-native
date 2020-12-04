import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const DetailedScreen = ({route}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: route.params.rawLink,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
