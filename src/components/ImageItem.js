import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const ImageItem = ({
  pictureObj: {description, name, thumbLink, rawLink},
  navigation,
}) => (
  <View style={styles.ImageItemWrap}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate('Detailed', {rawLink: rawLink})}
      style={styles.ImageContainer}>
      <Image
        source={{
          uri: thumbLink,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
    <Text style={styles.imageText}>author: {name}</Text>
    <Text style={styles.imageText}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  ImageItemWrap: {
    alignItems: 'center',
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  ImageContainer: {
    width: '95%',
    height: 210,
    borderLeftColor: 'green',
    borderLeftWidth: 3,
    borderRightColor: 'green',
    borderRightWidth: 3,
    marginBottom: 10,
  },
  imageText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
