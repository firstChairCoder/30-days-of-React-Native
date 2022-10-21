import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

function HomeScreen() {
  return <View style={{ flex: 1, backgroundColor: "lime" }} />;
}

const { Navigator, Screen } = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={"Home"} component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
