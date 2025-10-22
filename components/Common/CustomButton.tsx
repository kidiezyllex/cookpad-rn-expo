import { Pressable } from 'react-native';

import { getScaleFactor } from '@/lib/scaling';
import { ButtonProps } from "@/types/type";
import TextScaled from './TextScaled';

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-customPrimary border-[0.5px]";
    case "transparent":
      return "bg-transparent";
    default:
      return "bg-customPrimary";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    case "outline":
      return "text-customPrimary";
    case "transparent":
      return "text-customPrimary";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <Pressable 
    onPress={onPress}
    className={`flex flex-row justify-center items-center px-6 py-2 w-full rounded-lg shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
    style={{ 
      height: getScaleFactor() * 40, 
      minHeight: getScaleFactor() * 40,
    }}
    {...props}
  >
    {IconLeft && <IconLeft />}
    <TextScaled size="base" className={`font-bold ${getTextVariantStyle(textVariant)}`}>{title}</TextScaled>
    {IconRight && <IconRight />}
  </Pressable>
);

export default CustomButton;