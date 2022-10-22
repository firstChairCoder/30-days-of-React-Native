import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../store";
import {
  setFont,
  setFormat,
  setShowBattery,
  setShowDate,
  setShowSeconds
} from "../store/slice/configSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTimeFont = () => {
  const dispatch = useAppDispatch();
  const timeFont = useAppSelector((state) => state.config.font);
  const setTimeFont = (font: string) => dispatch(setFont(font));

  return { timeFont, setTimeFont };
};

export const useTimeFormat = () => {
  const dispatch = useAppDispatch();
  const timeFormat = useAppSelector((state) => state.config.format);
  const setTimeFormat = (format: string) => dispatch(setFormat(format));

  return { timeFormat, setTimeFormat };
};

export const useTimeColor = () => {
  const dispatch = useAppDispatch();
  const timeColor = useAppSelector((state) => state.config.fontColor);
  const setTimeColor = (color: string) => dispatch(setFormat(color));

  return { timeColor, setTimeColor };
};

export const useShowSeconds = () => {
  const dispatch = useAppDispatch();
  const showTimeSeconds = useAppSelector((state) => state.config.showSeconds);
  const setShowTimeSeconds = (setter: boolean) =>
    dispatch(setShowSeconds(setter));

  return { showTimeSeconds, setShowTimeSeconds };
};

export const useShowDate = () => {
  const dispatch = useAppDispatch();
  const showTimerDate = useAppSelector((state) => state.config.showDate);
  const setShowTimerDate = (setter: boolean) => dispatch(setShowDate(setter));

  return { showTimerDate, setShowTimerDate };
};

export const useShowBattery = () => {
  const dispatch = useAppDispatch();
  const showBatteryLevel = useAppSelector((state) => state.config.showBattery);
  const setShowBatteryLevel = (setter: boolean) =>
    dispatch(setShowBattery(setter));

  return { showBatteryLevel, setShowBatteryLevel };
};
