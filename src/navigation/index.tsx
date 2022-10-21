import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/HomeScreen";

const { Navigator, Screen } = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={"Home"} component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;