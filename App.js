/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import CompleteScreen from "./screens/CompleteScreen/CompleteScreen"
import ActiveScreen from "./screens/ActiveScreen/ActiveScreen";
import AllScreen from "./screens/AllScreen/AllScreen";
import Details from "./screens/Details/Details"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="All to do" component={AllScreen} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )

}
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="AllScreen"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="CompleteScreen"
            component={CompleteScreen}
            options={{
              tabBarLabel: 'Done',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="check-all" color={color} size={40} />
              ),
            }}
          />
          <Tab.Screen
            name="AllScreen"
            component={StackNavigation}
            options={{
              tabBarLabel: 'All',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="plus-circle-outline" color={color} size={40} />
              ),
            }}
          />
          <Tab.Screen
            name="ActiveScreen"
            component={ActiveScreen}
            options={{
              tabBarLabel: 'Active',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="playlist-check" color={color} size={40} />
              ),
              // tabBarBadge: 3,
            }}
          />
          {/* <Stack.Screen name="Detail" component={Details} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
