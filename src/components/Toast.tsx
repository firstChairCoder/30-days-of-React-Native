/* eslint-disable react-native/split-platform-components */
import * as React from "react";
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    elevation: 9,
    left: 0,
    position: "absolute",
    right: 0,
    zIndex: 10
  },
  contentWrapper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    bottom: 64,
    maxWidth: "80%",
    padding: 8
  },
  text: {
    color: "#F4F5F6",
    fontSize: 14,
    textAlign: "center"
  }
});

const DURATION = {
  LENGTH_SHORT: 2000,
  FOREVER: 0
};

const CustomToast = React.forwardRef((_props, ref) => {
  const [isShowing, setIsShowing] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const opacity = React.useRef<Animated.Value>(new Animated.Value(1)).current;
  //vars declaration
  let animation: Animated.CompositeAnimation | null = null;
  let timer: NodeJS.Timeout | null = null;
  let isVisible = false;

  React.useImperativeHandle(ref, () => ({
    show: (text: string) => {
      Platform.OS === "android"
        ? ToastAndroid.show(text, ToastAndroid.SHORT)
        : show(text);
    }
  }));

  const close = () => {
    const delay = DURATION.LENGTH_SHORT;

    if (!isShowing && !isVisible) {
      return;
    }
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      animation = Animated.timing(opacity, {
        toValue: 0.0,
        duration: 500,
        useNativeDriver: true
      });
      animation.start(() => {
        setIsShowing(false);
        isVisible = false;
      });
    }, delay);
  };

  const show = (msg: string) => {
    setIsShowing(true);
    setMessage(msg);

    animation = Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    });
    animation.start(() => {
      isVisible = true;
      close();
    });
  };

  return (
    <>
      {isShowing && Platform.OS !== "android" && (
        <View
          style={[styles.container, { top: height - 120 }]}
          pointerEvents="none"
        >
          <Animated.View style={[styles.contentWrapper, { opacity }]}>
            <Text style={styles.text}>{message}</Text>
          </Animated.View>
        </View>
      )}
    </>
  );
});

export default CustomToast;
