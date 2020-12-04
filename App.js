import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from './components/Header';
import {ImageItem} from './components/ImageItem';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ImageItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    color: '#fff',
  },
});

export default App;
