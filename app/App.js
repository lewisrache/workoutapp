import * as React from 'react';
import { Button, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import getList from './src/views/PlanList.js';
import { useQuery } from 'react-query';
import { getPlans, getPlanExercises } from './src/routes.js';
import { styles } from './src/styles.js';
import PlansScreen from './src/plans/Plans.js';
import PlanScreen from './src/plans/Plan.js';

function HomeScreen({ route, navigation }) {
  const {first} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to PLANS"
        onPress={() => navigation.navigate('Plans', { thing: first})}
      />
    </View>
  );
}

const testConstAsync = async (inputVar) => {
    console.log("TESTING ASYNC");
    console.log(inputVar);
    const data = await fetch("http://localhost:8000/users/1/plans")
                       .then(response => response.json());
    // syntactically equivalent:
    //    const response = await fetch("http://localhost:8000/users/1/plans")
    //    const data = await response.json();
    console.log(data);
    return data;
};

const Stack = createStackNavigator();

function App() {
    // const { status, data, error, isFetching } = useQuery("testAsync", testConstAsync("test"));
    // console.log({ status, data, error, isFetching });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{first: "homeOne"}}/>
        <Stack.Screen name="Plans" component={PlansScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
