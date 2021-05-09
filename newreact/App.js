// Switch Screen out of the Navigation Drawer
// https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import SecondPagenw from './pages/SecondPagenw';
import ScreenInternal from './pages/ScreenInternal';
import ScreenExternal from './pages/ScreenExternal';
import LoginPage from './pages/LoginPage';
import SettingsScreen from './pages/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const firstScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ScreenInternal"
        component={ScreenInternal}
        options={{
          title: 'Internal Screen', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const secondScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}
          />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const loginScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}
          />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: 'Entry Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const secondScreenStack2 = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPagenw"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}
          />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPagenw"
        component={SecondPagenw}
        options={{
          title: 'Second Page nw', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FirstPage"
        options={{
          drawerLabel: 'First page Option',
          activeTintColor: '#e91e63',
        }}
        component={firstScreenStack}
      />
      <Drawer.Screen
        name="SecondPage"
        options={{
          drawerLabel: 'Second page Option',
          activeTintColor: '#e91e63',
        }}
        component={secondScreenStack}
      />
      <Drawer.Screen
        name="SecondPagenw"
        options={{
          drawerLabel: 'Second page new',
          activeTintColor: '#e91e63',
        }}
        component={secondScreenStack2}
      />
      <Drawer.Screen
        name="LoginPage"
        options={{
          drawerLabel: 'Entry Page',
          activeTintColor: '#e91e63',
        }}
        component={loginScreenStack}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScreenExternal"
          component={ScreenExternal}
          options={{
            title: 'External Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;