import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useRef, useState } from "react";
import Swiper from "react-native-swiper";
import { Onboarding } from "@/constants";
import CustomButton from "@/components/customButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === Onboarding.length - 1;
  return (
    <>
      <SafeAreaView className="flex h-full items-center justify-between bg-white">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
          className="w-full flex justify-end items-end p-5"
        >
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </TouchableOpacity>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
          }
          activeDot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {Onboarding.map((item) => (
            <View className="flex items-center justify-center p-5">
              <Image
                source={item.image}
                className="w-full h-[300px]"
                resizeMode={"contain"}
              />
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
              <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>
        <CustomButton
          title="Next"
          className="w-10/12 mt-10"
          title={isLastSlide ? "Get started" : "Next"}
          onPress={() => {
            isLastSlide
              ? router.replace("/(auth)/sign-up")
              : swiperRef.current?.scrollBy(1);
          }}
        />
      </SafeAreaView>
    </>
  );
};
export default Welcome;
