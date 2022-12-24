import { View, Text, TextInput, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { storeItem } from "../utilities/http";

export default function Index() {
  const [item, setItem] = useState({
    title: '',
    description: '',
    price: ''
  });

  function handleChange(attribute, value){
    setItem((currentState) => {
      return{
        ...currentState,
        [attribute]: value
      }
    })
  }

  function sendData(){
    storeItem(item);
  }

  return (
    <View className="flex-1 justify-center bg-orange-200">
      <Text className="font-bold text-2xl text-center">The Firebase Items App.</Text>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Title:</Text>
        <TextInput
          label="title"
          onChangeText={handleChange.bind(this, 'title')}
          className="bg-white w-full my-2 border border-gray-300 p-2"
          placeholder="My first item..."
        />
      </View>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Description:</Text>
        <TextInput
          onChangeText={handleChange.bind(this, 'description')}
          className="bg-white w-full my-2 border border-gray-300 p-2"
          placeholder="My first description..."
        />
      </View>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Price:</Text>
        <TextInput
          onChangeText={handleChange.bind(this, 'price')}
          className="bg-white w-full my-2 border border-gray-300 p-2"
          placeholder="24.99"
        />
      </View>
      <Pressable
        className="mx-auto bg-green-600 p-3 rounded-lg"
        onPress={sendData}
      >
        <Text className="text-white font-bold text-base">Save Item</Text>
      </Pressable>
      <StatusBar style="dark" />
    </View>
  )
}
