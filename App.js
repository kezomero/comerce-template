import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import RegisterScreen from './screens/RegisterScreen';
import VideoScreen from './screens/VideoScreen';
import CartScreen from './screens/Cart';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MainApp = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue', // Change the primary color to your desired color
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Wait" component={VideoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const BottomTabs = ({ route }) => {
  const { username, role } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'cog-outline';
          }
          
          else if (route.name === 'Cart') {
            iconName = 'cart';
          }
          else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'orange', // Change the active tab color to your desired color
        inactiveTintColor: 'gray', // Change the inactive tab color to your desired color
      }}
    >

      <Tab.Screen name="Home" component={LandingScreen} initialParams={{ username, role }} options={{headerShown:false}} />
      
      <Tab.Screen name="Settings" component={SettingScreen} initialParams={{ username, role }} options={{headerShown:false}}/>
      <Tab.Screen name="Cart" component={CartScreen} initialParams={{ username, role }} options={{headerShown:true}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ username, role }} options={{headerShown:false}}/>
      
      
    </Tab.Navigator>
  );
};

export default MainApp;
