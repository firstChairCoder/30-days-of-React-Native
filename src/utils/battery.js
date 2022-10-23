import * as React from 'react'
import * as Battery from 'expo-battery'

/**
 * Gets the battery level of the device as a number between 0 and 1, inclusive.
 * If the device does not support retrieving the battery level, this method
 * returns -1.
 */
export const useBatteryLevel = () => {
  const [level, setLevel] = React.useState(-1)

  React.useEffect(() => {
    // checks the battery level every minute
    const interval = setInterval(() => {
      Battery.getBatteryLevelAsync().then(setLevel)
    }, 60000)

    Battery.getBatteryLevelAsync().then(setLevel)
    return () => clearInterval(interval)
  }, [])

  return level
}