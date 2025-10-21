import AdditionalServices from '@/components/Home/AdditionalServices';
import Features from '@/components/Home/Features';
import PolygonLuminary from '@/components/Home/PolygonLuminary';
import QuickActions from '@/components/Home/QuickActions';
import { icons } from '@/constants';
import { useLocationStore } from '@/store';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
export default function HomeScreen() {
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const [loading, setLoading] = useState(true);
  const [hasPermissions, setHasPermissions] = useState(false);
  const insets = useSafeAreaInsets();
  const googleInputRef = useRef<any>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSignOut = () => {
    router.replace("/(auth)/sign-in")
  };
  useEffect(() => {
    const requestLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setHasPermissions(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync();
        let addressString = "Vị trí hiện tại";

        const maxRetries = 3;
        let retryCount = 0;

        while (retryCount < maxRetries) {
          try {
            const address = await Location.reverseGeocodeAsync({
              latitude: location.coords?.latitude!,
              longitude: location.coords?.longitude!,
            });

            if (address && address.length > 0) {
              addressString = `${address[0].name || ''}, ${address[0].region || ''}`.replace(/^, |, $/, '') || "Vị trí hiện tại";
            }
            break;
          } catch (geocodeError) {
            retryCount++;
            if (retryCount < maxRetries) {
              await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
            }
          }
        }
        setUserLocation({
          latitude: location.coords?.latitude || 21.0379,
          longitude: location.coords?.longitude || 105.8342,
          address: addressString,
        });

        setHasPermissions(true);
        setLoading(false);
      } catch (error) {
        setHasPermissions(false);

        setUserLocation({
          latitude: 21.0379,
          longitude: 105.8342,
          address: "Hà Nội, Việt Nam",
        });

        setLoading(false);
      }
    };

    requestLocation();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-general-500">
        <View className='px-4'>
          {/* Header */}
          <View className='flex flex-row justify-between items-center my-5'>
            <Text className='text-2xl capitalize font-JakartaExtraBold text-secondary-900'>
              Xin chào{", "}
            </Text>
            <TouchableOpacity onPress={handleSignOut} className='justify-center items-center w-10 h-10 bg-white rounded-full shadow-sm'>
              <Image source={icons.out} className='w-4 h-4' />
            </TouchableOpacity>
          </View>
          {/* Current Location Map - Removed */}
          <View className='mt-4'>
            <Text className='mb-3 text-xl font-JakartaBold text-secondary-900'>Vị trí hiện tại của bạn</Text>
            <View className="flex flex-row items-center bg-gray-200 h-[300px] rounded-xl rounded-b-none overflow-hidden shadow-sm justify-center">
              <Text className="text-lg text-gray-600">Map functionality removed</Text>
            </View>
          </View>
        </View>

        {/* Main Content Container as BottomSheet */}
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["44%", "90%"]}
          index={0}
          handleIndicatorStyle={{ backgroundColor: 'white' }}
          backgroundStyle={{ backgroundColor: '#16a34a' }}
          enablePanDownToClose={false}
          enableOverDrag={false}
          style={{ zIndex: 60, elevation: 100 }}
        >
          <BottomSheetView style={{ flex: 1, position: 'relative' 
          }}
            >
            {/* Background SVG Image */}
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.5,
              }}
            >
              <PolygonLuminary />
            </View>
            {/* Bubble Background */}
            <View className="absolute top-0 right-8 w-32 h-32 rounded-full bg-white/10" />
            <View className="absolute left-12 top-24 w-28 h-28 rounded-full bg-white/15" />
            <View className="absolute right-16 bottom-32 w-20 h-20 rounded-full bg-white/10" />
            <View className="absolute left-8 bottom-20 w-36 h-36 rounded-full bg-white/5" />
            <ScrollView 
              style={{ flex: 1 }}
              contentContainerStyle={{ padding: 20, paddingTop: 0, paddingBottom: insets.bottom + 40 }}
              showsVerticalScrollIndicator={false}
            >
              {/* Car Image */}
              <View className='flex justify-center items-center'>
                <Image
                  source={require('@/assets/images/car.png')}
                  className='w-auto h-[100px]'
                  resizeMode='contain'
                />
              </View>

              <View className='pb-10'>
                <QuickActions/>
                <Features />
                <AdditionalServices />
              </View>
            </ScrollView>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};


