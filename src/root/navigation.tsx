import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import {useEffect, useState} from 'react';
import News from '../screens/fullnews';
import {Icons} from '../assets/Icons';
import styles from './styles';
import Favourite from '../screens/Favourite';
import SearchItem from '../screens/searchPage';
import SwiperComponent from '../screens/onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SeeAll from '../screens/seeAll';

const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
  const [onboard, setOnboard] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('onboardKey').then(value => {
      if (value) {
        console.log('onboard set to false');
        setOnboard(false);
      } else {
        AsyncStorage.setItem('onboardKey', 'abc');
      }
    });
  }, []);

  const Stack = createStackNavigator();

  const [showSplash, setShowSplash] = useState(true);

  const DashboardNavigation = () => {
    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.bottomTab,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: '#FF3A44',
        }}>
        <BottomTabs.Screen
          component={Home}
          name="Home"
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icons.HomeActive height={25} width={25} />
              ) : (
                <Icons.HomeInactive height={25} width={25} />
              ),
          }}
        />
        <BottomTabs.Screen
          name="Favourite"
          component={Favourite}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icons.FavActive height={25} width={25} />
              ) : (
                <Icons.FavInactive height={25} width={25} />
              ),
          }}
        />
      </BottomTabs.Navigator>
    );
  };

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
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        ) : null}
        {onboard ? (
          <Stack.Screen
            name="SwiperComponent"
            component={SwiperComponent}
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
        <Stack.Screen
          name="SearchItem"
          component={SearchItem}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SeeAll"
          component={SeeAll}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
