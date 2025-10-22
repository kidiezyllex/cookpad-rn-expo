import { TouchableOpacityProps } from "react-native";
declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success" | "transparent";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success" | "transparent" | "outline";
  IconLeft?: React.ComponentType<any> | React.ReactElement;
  IconRight?: React.ComponentType<any> | React.ReactElement;
  className?: string;
}
