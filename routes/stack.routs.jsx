import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';

import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function StackRoutes(){
  return (
    <Tab.Navigator screenOptions={() => ({
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {backgroundColor: '#000000', borderWidth: 0},
      headerStyle: {backgroundColor: '#000000', elevation: 0, borderBottomColor: '#3b3b3b', borderWidth: 1},
      headerTitleStyle: {color: 'white'},
      headerTitleAlign: 'center'
    })}>
      <Tab.Screen 
        name={"IFAL"} 
        component={ScreenA}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen 
        name={"Perfil"} 
        component={ScreenB} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}