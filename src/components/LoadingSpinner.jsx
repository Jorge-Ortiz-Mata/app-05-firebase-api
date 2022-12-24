import { View, ActivityIndicator } from "react-native";

export default function LoadingSpinner(){

  return(
    <View className="flex-1 justify-center items-center p-10">
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}
