import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import { useEffect, useState } from 'react';

// const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
  const Stack = createStackNavigator();

  const [showSplash, setShowSplash] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setShowSplash(false);
    }, 4000)
  }, [])
  return (
    <NavigationContainer>
      {/* <BottomTabs.Navigator>
        <BottomTabs.Screen name="Home" component={Home} options={{headerShown: false}} />
      </BottomTabs.Navigator> */}
      <Stack.Navigator>
       {showSplash ?  <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} /> : null }
       <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;
