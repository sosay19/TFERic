import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import RegisterScreen from './src/screens/RegisterScreen';
import reducers  from './src/reducers';


const store = createStore(reducers);
const stack = createStackNavigator();
export default function App(){
  return(
    <Provider store={store}>
      <RegisterScreen/>
      {/* <NavigationContainer>
        <Stack.Navigatior>
          <Stack.Screen
            name="register"
            component={RegisterScreen}
            />
        </Stack.Navigatior>
      </NavigationContainer> */}
    </Provider>
  );
}