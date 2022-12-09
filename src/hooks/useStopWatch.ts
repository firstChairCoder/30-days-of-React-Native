import { useState } from "react";

import useInterval from "./useInterval";
import Time from "../utils/time";

export default function useStopWatch() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [pastTime, setPastTime] = useState(new Date());
  const [seconds, setSeconds] = useState(
    currentTime + Time.getSecondsFromPastTime(pastTime || 0)
  );

  useInterval(
    () => {
      setSeconds(currentTime + Time.getSecondsFromPastTime(pastTime));
    },
    isStarted ? 1000 : null
  );

  const controls = {
    start: () => {
      const currentPastTime = new Date();
      setPastTime(currentPastTime);
      setIsStarted(true);
      setSeconds(0 + Time.getSecondsFromPastTime(currentPastTime));
    },
    reset: () => {
      const currentPastTime = new Date();
      setPastTime(currentPastTime);
      setCurrentTime(0);
      setSeconds(currentTime + Time.getSecondsFromPastTime(currentPastTime));
    },
    pause: () => {
      setCurrentTime(seconds);
      setIsStarted(false);
    }
  };

  return {
    ...Time.getTimeFromSeconds(seconds),
    controls,
    isStarted
  };
}
