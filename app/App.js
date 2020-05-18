import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import getList from './src/views/PlanList.js';

function HomeScreen({ route, navigation }) {
  const {first} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to PLANS"
        onPress={() => navigation.navigate('Details', { thing: first})}
      />
    </View>
  );
}

// what we want for PLANS
function DetailsScreen({ route, navigation }) {
  const {thing} = route.params;
  const obj1 = {id:1,name:"one"};
  const obj2 = {id:2,name:"two"};
  const obj3 = {id:3,name:"three"};
  let data = [];
  data.push(obj1);
  data.push(obj2);
  data.push(obj3);
  const ClickyList = getList(data, navigation);
  console.log(ClickyList);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      { ClickyList }
      <TouchableOpacity title="Go to Home" onPress={() => navigation.navigate('Home')} >
         <Text>Home</Text>
     </TouchableOpacity>
      <TouchableOpacity title="Go back" onPress={() => navigation.goBack()} >
         <Text>Back</Text>
     </TouchableOpacity>
    </View>
  );
}

function PlanScreen({ route, navigation }) {
    // TODO - back button should be in the header maybe
    // TODO - how to update the title dynamically?
    // TODO - get the plan contents
    const plan = route.params;
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Plan: {plan.id}</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{first: "homeOne"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
