import { Dimensions, PixelRatio, Platform } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')
const scale = screenWidth / 320

export const normalize = (size) => {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}