import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Loader} from '../components/Loader';

export const DetailedScreen = ({route}) => {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <View style={styles.container}>
      {showLoader ? <Loader showLoader={showLoader} /> : null}
      <Image
        style={styles.image}
        source={{
          uri: route.params.rawLink,
        }}
        onLoadEnd={() => setShowLoader(false)}
      />
    </View>
  );
};

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
