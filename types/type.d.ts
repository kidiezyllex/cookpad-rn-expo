import { TouchableOpacityProps } from "react-native";
declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success" | "transparent" | "ghost";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success" | "transparent" | "outline" | "ghost";
  IconLeft?: React.ComponentType<any> | React.ReactElement;
  IconRight?: React.ComponentType<any> | React.ReactElement;
  className?: string;
}
