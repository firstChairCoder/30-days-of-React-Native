import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import { HomeScreen } from "../screens/HomeScreen";

const { Navigator, Screen } = createStackNavigator();

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
          <Screen name={"Home"} component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainNavigator;
