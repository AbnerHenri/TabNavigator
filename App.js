import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTab from './Src/Navigators/MainTab';

const App = () => {

  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default App;
