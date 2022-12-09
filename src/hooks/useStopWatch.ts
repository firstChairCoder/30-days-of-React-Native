/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";

import useInterval from "./useInterval";
import Time from "../utils/time";

export default function useStopWatch() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [pastTime, setPastTime] = useState(new Date());
  const [seconds, setSeconds] = useState(
    Time.getSecondsFromPastTime(pastTime || 0)
  );

  useInterval(
    () => {
      setSeconds(currentTime + Time.getSecondsFromPastTime(pastTime));
    },
    //@ts-ignore //NOTE: No idea why TS is crying here
    isStarted ? 1000 : null
  );

  const controls = {
    start: () => {
      const currentPastTime = new Date();
      setPastTime(currentPastTime);
      setIsStarted(true);
      setSeconds(currentTime + Time.getSecondsFromPastTime(currentPastTime));
    },
    reset: () => {
      const currentPastTime = new Date();
      setPastTime(currentPastTime);
      setCurrentTime(0);
      setSeconds(Time.getSecondsFromPastTime(currentPastTime));
    },
    pause: () => {
      setCurrentTime(seconds);
      setIsStarted(false);
    }
  };

  return {
    ...Time.getTimeFromSeconds(seconds),
    controls
  };
}
