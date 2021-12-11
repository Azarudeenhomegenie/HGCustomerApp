import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SafeAreaView from 'react-native-safe-area-view';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Header from './components/Header';
import OffersScreen from './screens/Offers';
import HomePageScreen from './screens/HomePage';
import MyaccountScreen from './screens/Myaccount';
import BookingsScreen from './screens/Bookings';

function HomeScreen() {
  let [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  });

  return (
    <View style={styles.screen}>
      <Header />
      <HomePageScreen />
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer style={[styles.navContainer]}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 70, 
            borderTopLeftRadius: 30, 
            borderTopRightRadius: 30, 
            // elevation: 8,
            // borderTopWidth: 0,
            //backgroundColor: '#fff1',
            //padding: 10
          },
          tabBarOptions: {
            style: {				
              //elevation: 4,
              marginTop: 10
            }
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Booking') {
              iconName = focused ? 'calendar' : 'calendar';
            } else if (route.name === 'GetGenie') {
              iconName = focused ? 'pluscircle' : 'pluscircle';
            } else if (route.name === 'Offers') {
              iconName = focused ? 'tago' : 'tago';
            } else if (route.name === 'Account') {
              iconName = focused ? 'user' : 'user';
            }
            //return <Ionicons name={iconName} size={size} color={color} />;
            return <AntDesign name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#2EB0E4',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontSize: 12,
            color: '#2eb0e4',
            padding: 10,
          },
        })}
      >
        <Tab.Screen style={[styles.tabMenu, styles.homeMenu]} name="Home" component={HomeScreen} />
        <Tab.Screen style={[styles.tabMenu, styles.bookingMenu]} name="Booking" component={BookingsScreen} />
        <Tab.Screen style={[styles.tabMenu, styles.getGenieMenu]} name="GetGenie" component={MyaccountScreen} />
        <Tab.Screen style={[styles.tabMenu, styles.offerMenu]} name="Offers" component={OffersScreen} />
        <Tab.Screen style={[styles.tabMenu, styles.accountMenu]} name="Account" component={MyaccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});