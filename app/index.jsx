import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLogged } = useGlobalContext();

  if (!isLoading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full flex items-center justify-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[300px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl font-bold text-center text-white">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
