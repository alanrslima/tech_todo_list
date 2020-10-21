import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Platform } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppContainer from './routes';

import reducers from './store';

export default function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <AppContainer />
    </Provider>
  );
}
