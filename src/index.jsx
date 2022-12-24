import { View, Text, TextInput, Pressable, Alert, FlatList } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { storeItem, getItems } from "../utilities/http";

export default function Index() {
  const [items, setItems] = useState({});
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
    if(item.title.length == 0 || item.price.length == 0 || item.description.length == 0){
      Alert.alert(
        'Item has not been saved',
        'Please, complete all the fields.',
        [{title: 'Accept'}]
      )
    } else {
      storeItem(item);
      Alert.alert(
        'Item Saved',
        'Your item has been successfully saved',
        [{title: 'Accept'}]
        )
    }
  }

  useEffect(() => {
    getItems().then((res) => {
      setItems(res)
    });
  }, []);

  return (
    <View className="flex-1 justify-center bg-orange-200">
      <Text className="font-bold text-2xl text-center">The Firebase Items App.</Text>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Title:</Text>
        <TextInput
          label="title"
          onChangeText={handleChange.bind(this, 'title')}
          className="bg-white w-full my-2 border border-gray-300 p-2 rounded-lg"
          placeholder="My first item..."
        />
      </View>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Description:</Text>
        <TextInput
          onChangeText={handleChange.bind(this, 'description')}
          className="bg-white w-full my-2 border border-gray-300 p-2 rounded-lg"
          placeholder="My first description..."
        />
      </View>
      <View className="items-start p-3">
        <Text className="font-semibold text-xl">Price:</Text>
        <TextInput
          onChangeText={handleChange.bind(this, 'price')}
          className="bg-white w-full my-2 border border-gray-300 p-2 rounded-lg"
          placeholder="24.99"
        />
      </View>
      <Pressable
        className="mx-auto bg-green-600 p-3 rounded-lg"
        onPress={sendData}
      >
        <Text className="text-white font-bold text-base">Save Item</Text>
      </Pressable>
      <View>
        <FlatList
          className="bg-white rounded-lg px-2 mt-5 mx-3 h-40"
          data={items}
          keyExtractor={item => item.id}
          renderItem={(itemData) => {
            return(
              <Text className="font-bold bg-gray-100 my-3 p-2">
                {itemData.item.title}
              </Text>
            )
          }}
          />
        </View>
      <StatusBar style="dark" />
    </View>
  )
}
