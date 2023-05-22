import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icons } from '../assets/Icons';
import styles from './styles';
import routes from "../assets/routes";
import palette from '../assets/colors';
import Home from '../screens/home';
import Favourite from '../screens/Favourite';
const DashboardNavigation = () => {
    const BottomTabs = createBottomTabNavigator();
    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.bottomTab,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: palette.Primary,
        }}>
        <BottomTabs.Screen
          component={Home}
          name={routes.Dashboard.Home.path}
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
          name={routes.Dashboard.Favourite.path}
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
  export default DashboardNavigation;