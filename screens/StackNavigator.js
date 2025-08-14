import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Loadup from './Loadup';
import Product from './products';
import Productdetails from './Productdetails';
import seller from './seller';
import Watchlist from './Washlist';
import Logout from './Logout';
import MainTabScreen from './MainTabScreen';
import Sold from './Sold';
import Aftersold from './Aftersold';
import ActiveUser from './activateUser';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadUp"
        component={Loadup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
            <Stack.Screen
        name="ActiveUser"
        component={ActiveUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={MainTabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={Productdetails}
        options={{
          headerShown: true,
          title: 'PRODUCT DETAIL',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Sold"
        component={Sold}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Aftersold"
        component={Aftersold}
        options={{
          headerShown: true,
          title: 'SOLD DETAIL',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};
const SellerStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Seller" component={seller} />
    </Stack.Navigator>
  );
};
const WatchListStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Watchlist" component={Watchlist} />
    </Stack.Navigator>
  );
};

const LogoutStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  SellerStackNavigator,
  WatchListStackNavigator,
  LogoutStackNavigator,
};
