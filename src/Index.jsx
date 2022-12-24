import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateItem from "./screens/CreateItem";
import EditItem from './screens/EditItem';

const Stack = createNativeStackNavigator();

export default function Index(){

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateItem" >
        <Stack.Screen name="CreateItem" component={CreateItem} />
        <Stack.Screen name="EditItem" component={EditItem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
