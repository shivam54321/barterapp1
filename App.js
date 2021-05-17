import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { AppDrawerNavigator} from './components/appDrawerNavigator';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
return(
<AppContainer/>
);
}

const switchNavigator = createSwitchNavigator({
HomeScreen:{screen: HomeScreen},
Drawer:{screen: AppDrawerNavigator},
BottomTab: {screen:AppTabNavigator},
})

const AppContainer = createAppContainer(switchNavigator);
