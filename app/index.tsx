import { router } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-get-random-values';
import "../global.css";

const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/onboarding' as any);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Home;