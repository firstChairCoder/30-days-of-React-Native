import * as React from "react";
import type { ListRenderItemInfo } from "react-native";
import {
  Animated,
  Easing,
  FlatList,
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

import { COLORS, SIZES } from "~/constants";
// eslint-disable-next-line import/order
import { DEMOS } from "~/data/appDemos";
// eslint-disable-next-line import/order
import { showToast } from "App";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    fontSize: 22,
    paddingTop: 4,
    textAlign: "center",
    textAlignVertical: "center"
  }
});

interface ScreenItemProps {
  data: ListRenderItemInfo<typeof DEMOS[0]>;
  isGrid: boolean;
  onScreenClicked: () => void;
}
const ScreenItem = ({ data, isGrid, onScreenClicked }: ScreenItemProps) => {
  const { index, item } = data;
  const ITEM_WIDTH = isGrid ? (SIZES.width - 36) / 2 : SIZES.width - 24;
  const translateY = React.useRef<Animated.Value>(
    new Animated.Value(50)
  ).current;
  const opacity = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        delay: index * (1000 / 3),
        easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true
      })
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
        margin: 8,
        transform: [{ translateY }]
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
          opacity: item.component === "" ? 0.4 : 1.0 // Faded if Template is not available
        }}
        source={require("../../assets/placeholder.jpeg")}
        resizeMode="contain"
      />
      <Pressable
        style={({ pressed }) => [
          {
            borderRadius: 4,
            ...StyleSheet.absoluteFillObject,
            opacity: Platform.OS === "ios" && pressed ? 0.6 : 1
          }
        ]}
        android_ripple={{ color: "rgba(128,128,128,0.3)" }}
        onPress={onScreenClicked}
      />
    </Animated.View>
  );
};

export const HomeScreen = ({ navigation }: any) => {
  const inset = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const [isGrid, setIsGrid] = React.useState(true);
  const marginTop =
    Platform.OS === "ios" ? inset.top : StatusBar.currentHeight ?? 24;

  const onTemplateClicked = (item: typeof DEMOS[0]) => {
    if (item.component) {
      navigation.navigate(item.component);
    } else {
      showToast("Working on it...");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, marginTop }} edges={["left", "right"]}>
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              marginTop: 8,
              marginLeft: 8,
              opacity: Platform.OS === "ios" && pressed ? 0.6 : 1
            }
          ]}
          onPress={() => true}
          android_ripple={{
            color: COLORS.gray,
            radius: 20,
            borderless: true
          }}
        >
          <Icon name={"menu"} size={SIZES.padding} color={COLORS.black} />
        </Pressable>
        <Text style={styles.header}>30 Days of React Native</Text>

        <Pressable
          style={({ pressed }) => [
            {
              marginTop: 8,
              marginRight: 8,
              opacity: Platform.OS === "ios" && pressed ? 0.6 : 1
            }
          ]}
          onPress={() => setIsGrid(!isGrid)}
          android_ripple={{
            color: "grey",
            radius: 20,
            borderless: true
          }}
        >
          <Icon
            name={isGrid ? "dashboard" : "view-agenda"}
            size={SIZES.padding}
            color="black"
          />
        </Pressable>
      </View>

      <FlatList
        key={isGrid ? "G" : "L"}
        style={{ marginTop: headerHeight, marginHorizontal: 8 }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: inset.bottom
        }}
        data={DEMOS}
        keyExtractor={(item) => item.name}
        numColumns={isGrid ? 2 : 1}
        renderItem={(data) => (
          <ScreenItem
            data={data}
            isGrid={isGrid}
            onScreenClicked={() => onTemplateClicked(data.item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

// import * as React from "react";
// import { ScrollView, Text, TouchableOpacity, View } from "react-native";
// import Constants from "expo-constants";
// import moment from "moment";

// function Timer({ interval, style }: { interval: number; style?: any }) {
//   const padTime = (num: number) => (num < 10 ? "0" + num : num);
//   const duration = moment.duration(interval);
//   const centiseconds = Math.floor(duration.milliseconds() / 10);
//   return (
//     <View style={{ flexDirection: "row" }}>
//       <Text style={style}>{padTime(duration.minutes())}:</Text>
//       <Text style={style}>{padTime(duration.seconds())}:</Text>
//       <Text style={style}>{padTime(centiseconds)}</Text>
//     </View>
//   );
// }

// function ButtonsRow({ children }: any) {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         alignSelf: "stretch",
//         justifyContent: "space-between",
//         marginVertical: 40
//       }}
//     >
//       {children}
//     </View>
//   );
// }

// interface RoundButtonProps {
//   title: string;
//   color: string;
//   backgroundColor: string;
//   onPress?: () => void;
//   disabled?: boolean;
// }

// function RoundButton({
//   title,
//   color,
//   backgroundColor,
//   onPress = () => true,
//   disabled = false
// }: RoundButtonProps) {
//   return (
//     <TouchableOpacity
//       onPress={() => !disabled && onPress()}
//       style={[
//         {
//           width: 80,
//           height: 80,
//           borderRadius: 40,
//           justifyContent: "center",
//           alignItems: "center"
//         },
//         { backgroundColor }
//       ]}
//       activeOpacity={disabled ? 1.0 : 0.7}
//     >
//       <View
//         style={{
//           width: 76,
//           height: 76,
//           borderRadius: 38,
//           borderWidth: 1,
//           borderColor: "#EEE",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       >
//         <Text style={[{ fontSize: 18 }, { color }]}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// interface LapProps {
//   itemNo: number;
//   interval: number;
//   fastest: boolean;
//   slowest: boolean;
// }
// function Lap({ itemNo, interval, fastest, slowest }: LapProps) {
//   const lapStyle = [
//     { color: "#FFF", fontSize: 20 },
//     fastest && { color: "#4BC05F" },
//     slowest && { color: "#CC3531" }
//   ];
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         borderTopWidth: 1.5,
//         borderColor: "#151515",
//         marginBottom: 16
//       }}
//     >
//       <Text style={lapStyle}>Lap {itemNo}</Text>
//       <Timer style={[lapStyle, { width: 32 }]} interval={interval} />
//     </View>
//   );
// }

// interface LapsTableProps {
//   laps: number[];
//   timer: number;
// }

// function LapsTable({ laps, timer }: LapsTableProps) {
//   const finishedLaps = laps.slice(1);
//   let min = Number.MAX_SAFE_INTEGER;
//   let max = Number.MIN_SAFE_INTEGER;
//   if (finishedLaps.length >= 2) {
//     finishedLaps.forEach((lap) => {
//       if (lap < min) {
//         min = lap;
//       }
//       if (lap > max) {
//         max = lap;
//       }
//     });
//   }
//   return (
//     <ScrollView style={{ alignSelf: "stretch" }}>
//       {laps.map((lap, index) => (
//         <Lap
//           itemNo={laps.length - index}
//           key={laps.length - index}
//           interval={index === 0 ? timer + lap : lap}
//           fastest={lap === min}
//           slowest={lap === max}
//         />
//       ))}
//     </ScrollView>
//   );
// }

// /**
//  * link:  https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//  */
// function useInterval(callback: any, delay: any) {
//   const savedCallback = React.useRef();

//   // Remember the latest callback.
//   React.useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   React.useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       const id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

// export const HomeScreen = () => {
//   const [start, setStart] = React.useState(0);
//   const [now, setNow] = React.useState(0);
//   const [laps, setLaps] = React.useState<number[]>([]);
//   const [isTimerRunning, setIsTimerRunning] = React.useState<boolean>(false);
//   const delay = 100; //per centisecond
//   const timer = now - start;

//   useInterval(
//     () => {
//       setNow(new Date().getTime());
//     },
//     isTimerRunning ? delay : null
//   );

//   const onPressStart = () => {
//     const nowTime = new Date().getTime();
//     setStart(nowTime);
//     setNow(nowTime);
//     setLaps([0]);
//     setIsTimerRunning(true);
//   };

//   const onPressStop = () => {
//     setIsTimerRunning(false);
//     const firstLap = laps[0] === undefined ? 0 : laps[0];
//     setLaps([firstLap + now - start, ...laps.slice(1)]);
//     setStart(0);
//     setNow(0);
//   };

//   const onPressReset = () => {
//     setLaps([]);
//     setStart(0);
//     setNow(0);
//   };

//   const onPressLap = () => {
//     const timestamp = new Date().getTime();
//     // const [firstLap, ...other] = laps;
//     const firstLap = laps[0] === undefined ? 0 : laps[0];
//     console.log("what " + firstLap);
//     setLaps([0, firstLap + now - start, ...laps.slice(1)]), setStart(timestamp);
//     setStart(timestamp);
//     setNow(timestamp);
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#17161A",
//         paddingTop: Constants.statusBarHeight * 4,
//         alignItems: "center",
//         paddingHorizontal: 20
//       }}
//     >
//       <Timer
//         interval={laps.reduce((total, curr) => total + curr, 0) + timer}
//         // interval={timer}
//         style={{
//           color: "#FFF",
//           fontSize: 80,
//           fontWeight: "300",
//           marginBottom: 16
//         }}
//       />

//       {laps.length === 0 && (
//         <ButtonsRow>
//           <RoundButton
//             title={"Lap"}
//             color={"#8B8B90"}
//             backgroundColor={"#151515"}
//             disabled
//           />
//           <RoundButton
//             title={"Start"}
//             color={"#50D167"}
//             backgroundColor={"#1B361F"}
//             onPress={onPressStart}
//           />
//         </ButtonsRow>
//       )}

//       {start > 0 && (
//         <ButtonsRow>
//           <RoundButton
//             title={"Lap"}
//             color={"#FFF"}
//             backgroundColor={"#3D3D3D"}
//             onPress={onPressLap}
//           />
//           <RoundButton
//             title={"Stop"}
//             color={"#E33935"}
//             backgroundColor={"#3C1715"}
//             onPress={onPressStop}
//           />
//         </ButtonsRow>
//       )}

//       {laps.length > 0 && start === 0 && (
//         <ButtonsRow>
//           <RoundButton
//             title={"Reset"}
//             color={"#FFF"}
//             backgroundColor={"#3D3D3D"}
//             onPress={onPressReset}
//           />
//           <RoundButton
//             title={"Start"}
//             color={"#50D167"}
//             backgroundColor={"#1B361F"}
//           />
//         </ButtonsRow>
//       )}

//       <LapsTable laps={laps} timer={timer} />
//     </View>
//   );
// };
