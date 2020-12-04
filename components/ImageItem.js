import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const ImageItem = () => (
  <View style={styles.ImageItemWrap}>
    <View style={styles.ImageContainer}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1606851577347-5ec511dfb22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzMjQ1NnwxfDF8YWxsfDF8fHx8fHwyfA&ixlib=rb-1.2.1&q=80&w=400',
        }}
        style={styles.image}
      />
    </View>

    <Text style={styles.imageText}>author</Text>
    <Text style={styles.imageText}>description</Text>
  </View>
);

const styles = StyleSheet.create({
  ImageItemWrap: {
    alignItems: 'center',
    marginTop: 10,
  },
  ImageContainer: {
    width: '90%',
    height: '60%',
  },
  imageText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    flex: 1,
    // resizeMethod: 'scale',
    resizeMode: 'cover',
  },
});
