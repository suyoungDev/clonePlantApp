import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Screens
import PlantDetail from './Screens/PlantDetail';
import Home from './Screens/Home';

// Tabs
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >

        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
        />

        {/* Screens */}
        <Stack.Screen 
          name="PlantDetail" 
          component={PlantDetail} 
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>    
  );
};


export default App;
