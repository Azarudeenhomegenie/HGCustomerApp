import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SafeAreaView from 'react-native-safe-area-view';
import { Ionicons } from '@expo/vector-icons';

import Header from './components/Header';
import OffersScreen from './screens/Offers';
import HomePageScreen from './screens/HomePage';
import MyaccountScreen from './screens/Myaccount';
import BookingsScreen from './screens/Bookings';


// export default function App() {
//   let [fontsLoaded] = useFonts({
//     'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
//   });
//   return (
//     <View style={styles.screen}>
//       <Header title="" />
//       <HomePageScreen />
//     </View>
//   );
// }

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Booking" component={BookingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});