import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ImageItem} from '../components/ImageItem';
import {connect} from 'react-redux';
import {Header} from '../components/Header';
const Main = ({pictures, navigation}) => (
  <View style={styles.container}>
    <Header />
    <FlatList
      data={pictures}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <ImageItem pictureObj={item} navigation={navigation} />
      )}
    />
  </View>
);

const mapStateToProps = ({images: {pictures}}) => ({
  pictures,
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    color: '#fff',
  },
});

export default connect(mapStateToProps)(Main);
