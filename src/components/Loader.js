import React from 'react';
import {View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
export const Loader = ({showLoader}) => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    <Spinner
      visible={showLoader}
      textContent={'Loading...'}
      textStyle={{color: '#fff'}}
    />
  </View>
);
