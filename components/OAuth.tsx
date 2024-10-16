import { Image, Text, View } from "react-native";
import { CustomButton } from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => (
    <View>
        <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
            <View className="flex-1 h-[1px] bg-general-100" />
            <Text className="text-lg">Or</Text>
            <View className="flex-1 h-[1px] bg-general-100" />
        </View>

        <CustomButton className="mt-4 w-full shadow-none" title="Log in with Google"
        IconLeft={() => (
            <Image  source={icons.google} resizeMode="contain" className="w-5 h-5 mx-2"/>
        )} />
    </View>
)

export default OAuth;