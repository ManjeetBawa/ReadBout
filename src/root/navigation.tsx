import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import {useEffect, useState} from 'react';
import News from '../screens/fullnews';
import MyComponent from '../screens/Favourites';
import {Icons} from '../assets/Icons';
import styles from './styles';

const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
  const Stack = createStackNavigator();

  const [showSplash, setShowSplash] = useState(true);

  const DashboardNavigation = () => {
    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.bottomTab,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor:'#FF3A44'
        }}>
        <BottomTabs.Screen
          component={Home}
          name="Home"
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icons.HomeActive height={25} width={25} />
              ) : (
                <Icons.HomeInactive  height={25} width={25} />
              ),
              
          }}
        />
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
    }, 2000);
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
