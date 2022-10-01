import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routs';

export function Routes(){
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}