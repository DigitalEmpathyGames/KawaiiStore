import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/login/login';
import Sales from '../screens/sales/sales';
import Bills from '../screens/bills/Bills';
import Stock from '../screens/stock/stock';

const Drawer = createDrawerNavigator();



const DrawerNavigator = () : JSX.Element => {

    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Sales" component={Sales} />
            <Drawer.Screen name="Bills" component={Bills} />
            <Drawer.Screen name="Stock" component={Stock} />
        </Drawer.Navigator>
    </NavigationContainer>
      );

}
export default DrawerNavigator;