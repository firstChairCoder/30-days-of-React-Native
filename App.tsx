import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import {
  Alegreya_400Regular,
  Alegreya_400Regular_Italic,
  Alegreya_600SemiBold,
  Alegreya_700Bold,
  Alegreya_700Bold_Italic,
  Alegreya_900Black
} from "@expo-google-fonts/alegreya";
import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_400Regular_Italic,
  useFonts
} from "@expo-google-fonts/lato";

import MainNavigator from "./src/navigation";
import CustomToast from "./src/components/Toast";

export default function App() {
  const toastRef = React.createRef<any>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedFonts] = useFonts({
    Alegreya: Alegreya_400Regular,
    AlegreyaItalic: Alegreya_400Regular_Italic,
    AlegreyaBold: Alegreya_700Bold,
    AlegreyaBoldItalic: Alegreya_700Bold_Italic,
    AlegreyaBlack: Alegreya_900Black,
    AlegreyaSemiBold: Alegreya_600SemiBold,
    LatoThin: Lato_100Thin,
    LatoLight: Lato_300Light,
    Lato: Lato_400Regular,
    LatoItalic: Lato_400Regular_Italic
  });

  React.useEffect(() => {
    async function prepare() {
      try {
        // keeps the splash screen visible while assets are cached
        await SplashScreen.preventAutoHideAsync();

        // pre-load/cache assets: images, fonts, and videos
      } catch (e) {
        console.log(e);
      } finally {
        // loading is complete
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  React.useEffect(() => {
    // when loading is complete
    if (isLoading === false) {
      // hide splash function
      const hideSplash = async () => SplashScreen.hideAsync();

      // hide splash screen to show app

      hideSplash();
    }
  }, [isLoading]);

  if (isLoading || !loadedFonts) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <MainNavigator />
      <CustomToast {...{ ref: toastRef }} />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
