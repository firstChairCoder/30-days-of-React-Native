import createSecureStore from "redux-persist-expo-securestore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import configReducer from "./slice/configSlice";

const storage = createSecureStore();
const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  config: configReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
