import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LandingScreen from './screens/LandingScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <PaperProvider>
      <NavigationContainer>
        {!isAuthenticated ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator
          tabBarOptions={{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    labelStyle: { fontSize: 16 },
    style: { backgroundColor: 'white' },
  }}>
            <Tab.Screen name="Landing" component={LandingScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainApp;
