/* eslint-disable import/no-anonymous-default-export */
import { Image } from "react-native";
import { Asset } from "expo-asset";

import preloadImages from "./images";

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = (images: number) =>
  Object.values(images).map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...imageAssets]);
};

// wait/sleep function
// /////////////////////////////////////////////////////////////////////////////
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export default {
  cacheImages,
  loadAssetsAsync,
  wait
};
