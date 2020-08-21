import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../page/HomePage/HomePage';
import Statistic from '../page/Statistic/Statistic';
import GeralPage from '../page/GeralPage/GeralPage';

const { Navigator, Screen } = createStackNavigator();


function AppStack() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {/* <Screen name="HomePage" component={HomePage}/>
        <Screen name="Statistic" component={Statistic}/> */}
        <Screen name="GeralPage" component={GeralPage}/>

      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
