/* ---------------TO BE CONTINUED--------------------------- */

/**
 *  const [listItemSunRay] = React.useState({
    listSunRay: Array.from({
      length: Math.floor(268 / 10)
    }).map(() => new Animated.Value(0)),
    listFireSunLight: Array.from({
      length: Math.floor(268 / 10)
    }).map(() => new Animated.Value(0))
  });

  const angleItem = React.useMemo(() => {
    return 360 / listItemSunRay.listSunRay.length;
  }, [listItemSunRay]);
  
  
 * <Animated.View
        style={[
          styles.timer,
          {
            transform: [
              {
                scale: 1.2
              },
              {
                rotate: "30deg"
              }
            ]
          }
        ]}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: "lime",
            transform: [{ translateX: 20 }, { translateY: 20 }]
          }}
        >
          {listItemSunRay.listSunRay.map((item, index) => {
            const angleThisItemDegree = angleItem * index;
            const angleThisItemRadius =
              (angleThisItemDegree * Math.PI) / 180 - Math.PI / 2;
            const coordinateItemStyle = {
              left: 135 * Math.cos(angleThisItemRadius) + 135 - 40,
              top: 135 * Math.sin(angleThisItemRadius) + 135 - 40,
              transform: [{ rotate: `${angleThisItemDegree}deg` }]
            };

            return (
              <Animated.View
                key={index}
                style={[
                  {
                    position: "absolute",
                    backgroundColor: "transparent",
                    borderTopWidth: 40,
                    borderTopColor: "transparent",
                    borderLeftWidth: 20,
                    borderLeftColor: "transparent",
                    borderRightWidth: 20,
                    borderRightColor: "transparent",
                    borderRadius: 777
                  },
                  coordinateItemStyle,
                  {
                    transform: [
                      {
                        rotate: `${angleThisItemDegree + 180}deg`
                      }
                    ]
                  }
                ]}
              >
                <Animated.View
                  style={{
                    position: "absolute",
                    top: 60,
                    width: 2,
                    height: 80,
                    backgroundColor: "#F4AF01"
                    // transform: [
                    //   {
                    //     translateY: listItemSunRay.listFireSunLight[
                    //       index
                    //     ].interpolate({
                    //       inputRange: [0, 1],
                    //       outputRange: [0, 360]
                    //     })
                    //   }
                    // ]
                    // opacity: item
                  }}
                />
              </Animated.View>
            );
          })}
        </View>
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FBAA59",
            width: TIMER_SIZE,
            height: TIMER_SIZE,
            borderWidth: 30,
            borderRadius: 999
          }}
        >
          <View
            style={{
              backgroundColor: "#D97846",
              padding: 20,
              borderRadius: 999
            }}
          >
            <Text>Empty</Text>
          </View>
        </View>
      </Animated.View>
 */
