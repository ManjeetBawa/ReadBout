import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';

const BottomTabs = createBottomTabNavigator();

const Navigation = () => {
    return(
    <NavigationContainer>
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Home" component={Home} /> 
        </BottomTabs.Navigator>
    </NavigationContainer>
    );
};

export default Navigation;