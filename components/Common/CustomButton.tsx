import { Pressable } from 'react-native';

import { getScaleFactor } from '@/lib/scaling';
import { ButtonProps } from "@/types/type";
import TextScaled from './TextScaled';

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "ghost":
      return "bg-[#FFEFE9]";
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
    case "ghost":
      return "#E36137";
    case "primary":
      return "#ffffff";
    case "secondary":
      return "#F3F4F6";
    case "danger":
      return "#FEE2E2";
    case "success":
      return "#D1FAE5";
    case "outline":
      return "#E36137";
    case "transparent":
      return "#E36137";
    case "default":
      return "#ffffff";
    default:
      return "#ffffff";
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
    {IconLeft && (typeof IconLeft === 'function' ? <IconLeft /> : IconLeft)}
    <TextScaled style={{color: getTextVariantStyle(textVariant)}} size="base" className={`font-bold`}>{title}</TextScaled>
    {IconRight && (typeof IconRight === 'function' ? <IconRight /> : IconRight)}
  </Pressable>
);

export default CustomButton;