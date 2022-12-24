import { Text, TextInput, View, Pressable } from "react-native";

export default function EditItem({route}) {
  const item = route.params.item;

  console.log(`My item is: ${item.title}`)

  return (
    <View>
      <Text>Editing item</Text>
    </View>
  )
}
