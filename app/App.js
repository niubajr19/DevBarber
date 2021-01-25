import React from 'react';

//Dependencia para navegação entre telas
import {NavigationContainer} from '@react-nativation/native';
import MainStack from './src/stacks/MainStack';

export default ()=> {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}