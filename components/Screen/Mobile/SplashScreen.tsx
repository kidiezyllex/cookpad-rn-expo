import { images } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

const splashImages = [images.splash1, images.splash2, images.splash3, images.splash4];
const DURATION = 1100; // ms per splash (nhanh hơn)
const FINAL_HOLD = 900; // ms giữ ảnh cuối cùng (nhanh hơn)

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let timeout: number;
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    if (index === 0) {
      timeout = setTimeout(() => setIndex(i => i + 1), DURATION);
    } else if (index < splashImages.length - 1) {
      timeout = setTimeout(() => setIndex(i => i + 1), DURATION);
    } else {
      timeout = setTimeout(() => onFinish && onFinish(), FINAL_HOLD);
    }
    return () => clearTimeout(timeout);
  }, [index, onFinish, fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={splashImages[index]}
        style={[
          styles.image,
          { opacity: fadeAnim },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: 314,
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
