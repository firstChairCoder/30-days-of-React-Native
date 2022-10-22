import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { COLORS, H24 } from "~/constants";

export interface ConfigState {
  font: string;
  format: string;
  fontColor: string;
  showSeconds: boolean;
  showDate: boolean;
  showBattery: boolean;
}

const initialState: ConfigState = {
  font: "Lato",
  format: H24,
  fontColor: COLORS.gray,
  showSeconds: false,
  showDate: true,
  showBattery: false
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setFont(state, action: PayloadAction<string>) {
      state.font = action.payload;
    },
    setFormat(state, action: PayloadAction<string>) {
      state.format = action.payload;
    },
    setFontColor(state, action: PayloadAction<string>) {
      state.fontColor = action.payload;
    },
    setShowSeconds(state, action: PayloadAction<boolean>) {
      state.showSeconds = action.payload;
    },
    setShowDate(state, action: PayloadAction<boolean>) {
      state.showDate = action.payload;
    },
    setShowBattery(state, action: PayloadAction<boolean>) {
      state.showBattery = action.payload;
    }
  }
});

export const {
  setFont,
  setFontColor,
  setFormat,
  setShowBattery,
  setShowDate,
  setShowSeconds
} = configSlice.actions;
export default configSlice.reducer;
