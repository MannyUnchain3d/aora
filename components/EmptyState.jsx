import { View, Image, Text } from "react-native";
import { images } from "../constants";
import CustomButtom from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButtom
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full mt-5"
      />
    </View>
  );
};

export default EmptyState;
