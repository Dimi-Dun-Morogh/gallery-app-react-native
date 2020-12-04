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
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    marginBottom: 5,
    // backgroundColor: 'orange',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
