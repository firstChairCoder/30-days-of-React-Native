import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import { HomeScreen } from "../screens/HomeScreen";
import { RouteKeys } from "./RouteKeys";

import { MainClockScreen } from "~/screens/MainClockScreen";

const { Navigator, Screen } = createStackNavigator();

const ClockStack = createStackNavigator();
function ClockStackNavigator() {
  return (
    <ClockStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <ClockStack.Screen
        name={RouteKeys.StopWatch}
        component={StopWatchScreen}
      /> */}
      <ClockStack.Screen
        name={RouteKeys.MainClock}
        component={MainClockScreen}
      />
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
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainNavigator;
