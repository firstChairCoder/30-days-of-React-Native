import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import { HomeScreen } from "../screens/HomeScreen";
import { RouteKeys } from "./RouteKeys";

import { MainClockScreen } from "~/screens/MainClockScreen";
import { StopWatchScreen } from "~/screens/StopWatchScreen";
import { SettingsScreen } from "~/screens/SettingsScreen";
import StopWatch from "~/screens/StopWatch";

const { Navigator, Screen } = createStackNavigator();

const ClockStack = createStackNavigator();
function ClockStackNavigator() {
  return (
    <ClockStack.Navigator screenOptions={{ headerShown: false }}>
      <ClockStack.Screen
        name={RouteKeys.MainClock}
        component={MainClockScreen}
      />
      <ClockStack.Screen
        name={RouteKeys.StopWatch}
        component={StopWatchScreen}
      />
      <ClockStack.Screen name={RouteKeys.Settings} component={SettingsScreen} />
    </ClockStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name={RouteKeys.Home} component={HomeScreen} />
          <Screen name={RouteKeys.Clock} component={ClockStackNavigator} />
          <Screen name={RouteKeys.NeuStopwatch} component={StopWatch} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainNavigator;
