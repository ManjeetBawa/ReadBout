import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import {useEffect, useState} from 'react';
import News from '../screens/fullnews';
import SearchItem from '../screens/searchPage';
import SwiperComponent from '../screens/onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardNavigation from './DashboardNavigation';
import SeeAll from '../screens/seeAll';
import routes from '../assets/routes';

const Navigation = () => {
  const [onboard, setOnboard] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('onboardKey').then(value => {
      if (value) {
        setOnboard(false);
      } else {
        AsyncStorage.setItem('onboardKey', 'abc');
      }
    });
  }, []);

  const Stack = createStackNavigator();

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2200);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplash ? (
          <Stack.Screen
            name={routes.splash.path}
            component={Splash}
            options={{headerShown: false}}
          />
        ) : null}
        {onboard ? (
          <Stack.Screen
            name={routes.SwiperComponent.path}
            component={SwiperComponent}
            options={{headerShown: false}}
          />
        ) : null}
        <Stack.Screen
          name={routes.Dashboard.path}
          component={DashboardNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.News.path}
          component={News}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.SearchItem.path}
          component={SearchItem}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.SeeAll.path}
          component={SeeAll}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
