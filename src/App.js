import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchPics} from './redux/pictures/picture.actions';
import MainScreen from './screens/Main.screen';
import {DetailedScreen} from './screens/Deailed.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = ({fetchImages}) => {
  useEffect(() => {
    fetchImages();
    // console.log(pictures[0]);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detailed"
          component={DetailedScreen}
          options={{title: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchPics),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    color: '#fff',
  },
});

export default connect(null, mapDispatchToProps)(App);
