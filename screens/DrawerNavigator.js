import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Seller from "./seller";
import TabNavigator from "./MainTabScreen";
import Loadup from './Loadup'
import Login from './Login'
import Register from './Register'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="LoadUp" component={Loadup} options={{headerShown: false }} />
     <Drawer.Screen name="Login" component={Login} options={{headerShown: false }}/>
     <Drawer.Screen name="Register" component={Register} options={{headerShown: false }}/>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={Seller} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;