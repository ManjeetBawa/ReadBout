import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import {useEffect, useState} from 'react';
import News from '../screens/fullnews';
import MyComponent from '../screens/Favourites';

const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
  const Stack = createStackNavigator();

  const [showSplash, setShowSplash] = useState(true);

  const DashboardNavigation = () => {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen component={Home} name="Home" />
        <BottomTabs.Screen
          name="MyComponent"
          component={MyComponent}
          options={{headerShown: false}}
        />
      </BottomTabs.Navigator>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplash ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          name="DashboardNavigation"
          component={DashboardNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
