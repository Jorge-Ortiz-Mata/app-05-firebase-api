import { useState, useEffect } from "react";
import { Text, TextInput, View, Pressable, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { updateItem } from "../../utilities/http";

export default function EditItem({route}) {
  const [item, setItem] = useState(route.params.item);

  function handleChange(attribute, value){
    setItem((currentState) => {
      return{
        ...currentState,
        [attribute]: value
      }
    })
  }

  function sendData(){
    if(item.title.length == 0 || item.price.length == 0 || item.description.length == 0){
      Alert.alert(
        'Item has not been saved',
        'Please, complete all the fields.',
        [{title: 'Accept'}]
      )
    } else {
      const params = {
        title: item.title, description: item.description, price: item.price
      }
      updateItem(item.id, params);
      Alert.alert(
        'Item Updated',
        'Your item has been successfully updated',
        [{title: 'Accept'}]
        )
    }
  }

  return (
    <View className="flex-1 justify-center bg-orange-200">
      <Text className="font-bold text-2xl text-center">Edit Item.</Text>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Title:</Text>
        <TextInput
          onChangeText={handleChange.bind(this, 'title')}
          className="bg-white w-full my-2 border border-gray-300 p-2 rounded-lg"
          placeholder="My first item..."
          value={item.title}
        />
      </View>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Description:</Text>
        <TextInput
          onChangeText={handleChange.bind(this, 'description')}
          className="bg-white w-full my-2 border border-gray-300 p-2 rounded-lg"
          placeholder="My first description..."
          value={item.description}
        />
      </View>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Price:</Text>
        <TextInput
          onChangeText={handleChange.bind(this, 'price')}
          className="bg-white w-full my-2 border border-gray-300 p-2 rounded-lg"
          placeholder="24.99"
          value={item.price}
        />
      </View>
      <Pressable
        className="mx-auto bg-green-600 p-3 rounded-lg"
        onPress={sendData}
      >
        <Text className="text-white font-bold text-base">Update Item</Text>
      </Pressable>
      <StatusBar style="dark" />
    </View>
  )
}
