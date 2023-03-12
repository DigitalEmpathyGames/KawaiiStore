
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Hola blabla
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
          </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
