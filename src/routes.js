import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './pages/List';
import Detail from './pages/Detail';
import CreateTask from './pages/CreateTask';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const RootStack = createStackNavigator();
function Routes() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.type === 'light' ? 'dark-content' : 'light-content'}
      />
      <RootStack.Navigator>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="List"
          component={List}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Detail"
          component={Detail}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="CreateTask"
          component={CreateTask}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
