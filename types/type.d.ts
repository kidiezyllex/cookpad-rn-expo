import { TouchableOpacityProps } from "react-native";

declare enum RideStatus {
  CONFIRMED = 'confirmed',       // Tài xế đã nhận chuyến
  DRIVER_ARRIVED = 'driver_arrived', // Tài xế đã đến
  IN_PROGRESS = 'in_progress',   // Đang trong chuyến
  COMPLETED = 'completed',       // Hoàn thành
  CANCELLED = 'cancelled',       // Đã hủy
  NO_SHOW = 'no_show'           // Khách không xuất hiện
}

declare interface Driver {
  id: number;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: number;
  vehicle_type: string;
}


declare interface Ride {
  ride_id?: number | string;
  origin_address: string;
  destination_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  ride_time: number;
  fare_price: number;
  payment_status: string;
  ride_status: RideStatus;
  driver_id: number;
  user_id: string;
  created_at: string;
  cancelled_at?: string;
  cancel_reason?: string;
  payment_intent_id?: string;
  driver: {
    driver_id?: number;
    first_name: string;
    last_name: string;
    car_seats: number;
    profile_image_url?: string;
    car_image_url?: string;
    rating?: number;
    vehicle_type: string;
  };
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success" | "transparent";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success" | "transparent" | "outline";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface GoogleInputProps {
  icon?: string;
  initialLocation?: string;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}
declare interface PaymentProps {
  fullName: string;
  email: string;
  amount: string;
  driverId: number;
  rideTime: number;
  originAddress: string;
  destinationAddress: string;
  originLatitude: number;
  originLongitude: number;
  destinationLatitude: number;
  destinationLongitude: number;
}

declare interface LocationStore {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface DriverStore {
  drivers: Driver[];
  selectedDriver: number | null;
  setSelectedDriver: (driverId: number) => void;
  setDrivers: (drivers: Driver[]) => void;
  clearSelectedDriver: () => void;
}

declare interface DriverCardProps {
  item: Driver;
  selected: number;
  setSelected: () => void;
}
