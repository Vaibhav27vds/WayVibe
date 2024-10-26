import { Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-primary-500";
    case "secondary":
      return "bg-secondary-500";
    case "danger":
      return "bg-danger-500";
    case "outline":
      return "bg-transparent border border-primary-500";
    case "success":
      return "bg-success-500";
    default:
      return "bg-primary-500";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-primary-500";
    case "secondary":
      return "text-secondary-500";
    case "danger":
      return "text-danger-500";
    case "success":
      return "text-success-500";
    default:
      return "text-white";
  }
};

const customButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-3xl p-5 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
      {...props}
    >
      <View>
        {IconLeft && <IconLeft />}
        <Text className={`text-lg font-bold ${getTextVariantStyle}`}>
          {title}
        </Text>
        {IconRight && <IconRight />}
      </View>
    </TouchableOpacity>
  );
};

export default customButton;
