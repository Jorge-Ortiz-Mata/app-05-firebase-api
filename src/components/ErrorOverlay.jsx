import { View, Text, Pressable } from "react-native";

export default function ErrorOverlay({message, onConfirm}){

  return(
    <View className="flex-1 justify-center items-center p-10">
      <Text className="font-bold text-2xl text-red-800">An error ocurred!</Text>
      <Text className="font-semibold text-red-800">{message}</Text>
      <Pressable className="bg-red-800 px-10 py-3 my-1 rounded-lg" onPress={onConfirm} >
        <Text className="text-white font-bold text-sm">
          Close
        </Text>
      </Pressable>
    </View>
  )
}
