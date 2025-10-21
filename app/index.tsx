import { router } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-get-random-values';
import "../global.css";

const Home = () => {
  useEffect(() => {
    router.replace('/(auth)/onboarding' as any);
  }, []);

  return null;
};

export default Home;