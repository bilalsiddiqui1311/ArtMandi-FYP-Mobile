import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Policies from "./Policies"
import Homescreen from './Home';
import Icon from 'react-native-vector-icons/Entypo';
import IconLogout from 'react-native-vector-icons/MaterialCommunityIcons';
import IconCart from 'react-native-vector-icons/FontAwesome';
import IconAdd from 'react-native-vector-icons/Ionicons';
import Logout from './Logout';
import Washlist from './Washlist';
import seller from './seller';
import Sold from "../../REACT_NATIVE-FYP-/screens/Sold"
import TermsService from './TermService';
import About from './About';
import { View,Text, TouchableOpacity } from 'react-native'
import SideMenu from "../screens/Component/sideMenu"
const HomeStack = createStackNavigator();
const SellerStack = createStackNavigator();
const WashlistStack = createStackNavigator();
const LogoutStack = createStackNavigator();
const AboutStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const BottomTabScreen =()=>(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Washlist"
      component={WashlistStackScreen}
      options={{
        tabBarLabel: 'My Watchlist',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="add-to-list" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Seller"
      component={SellerStackScreen}
      options={{
        tabBarLabel: 'Seller',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <IconAdd name="ios-add-circle-sharp" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={Sold}
      options={{
        tabBarLabel: 'Sold',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <IconCart name="shopping-bag" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Logout"
      component={LogoutStackScreen}
      options={{
        tabBarLabel: 'Logout',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <IconLogout name="logout" color={color} size={26} />
        ),
      }}
    />
    
  </Tab.Navigator>

);

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const MainTabScreen =()=>(
<Drawer.Navigator initialRouteName="Home"  
drawerType={'slide'}
    drawerContent={(props) => (
    <SideMenu {...props}></SideMenu>)}
    headerMode="none">
<Drawer.Screen name="Home" component={BottomTabScreen} />
</Drawer.Navigator>

)


export default MainTabScreen;
const HomeStackScreen =  ({navigation})=>(
    <HomeStack.Navigator screenOptions={
          {
            headerShown:false,
            headerStyle:{
              backgroundColor : '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight:'bold'
            }
          }
        }>
          <HomeStack.Screen name="Home" component={Homescreen} options={{
            headerLeft:null 
  
          }}/>
          <HomeStack.Screen
        name="Policies"
        component={Policies}
        options={{
          headerShown: false,
        }}
      />
        <HomeStack.Screen
        name="TermsService"
        component={TermsService}
        options={{
          headerShown: false,
        }}
      />
     <HomeStack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
        </HomeStack.Navigator> 
  );
  
  
  const SellerStackScreen =  ({Navigation})=>(
    <SellerStack.Navigator screenOptions={
          {
            headerStyle:{
              backgroundColor : '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight:'bold'
            }
          }
        }>
          <SellerStack.Screen name="Seller" component={seller} />
        </SellerStack.Navigator> 
  );
  const WashlistStackScreen =  ({Navigation})=>(
    <WashlistStack.Navigator screenOptions={
          {
            headerStyle:{
              backgroundColor : '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight:'bold'
            }
          }
        }>
          <WashlistStack.Screen name="My Watchlist" component={Washlist} />
        </WashlistStack.Navigator> 
  );
  const AboutStackScreen =  ({Navigation})=>(
    <AboutStack.Navigator screenOptions={
      
          {
            headerShown:false,
            headerStyle:{
              backgroundColor : '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight:'bold'
            }
          }
        }>
          <AboutStack.Screen name="About" component={About} />
        </AboutStack.Navigator> 
        
  );

 
  const LogoutStackScreen =  ({Navigation})=>(
    <LogoutStack.Navigator screenOptions={
          {
            headerStyle:{
              backgroundColor : '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight:'bold'
            }
          }
        }>
          <LogoutStack.Screen name="Logout" component={Logout} />
        </LogoutStack.Navigator> 
        
  );

 