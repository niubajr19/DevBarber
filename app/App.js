import React from 'react';

//Dependencia para navegação entre telas
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

export default ()=> {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}