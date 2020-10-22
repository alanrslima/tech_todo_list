import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './pages/List';
import Detail from './pages/Detail';
import CreateTask from './pages/CreateTask';

const RootStack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
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
