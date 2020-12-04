import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = () => (
  <View style={styles.headerWrap}>
    <Text style={styles.headerText}>Gallery App</Text>
  </View>
);

const styles = StyleSheet.create({
  headerWrap: {
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: 'green',
    borderBottomWidth: 4,
    // backgroundColor: 'orange',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
