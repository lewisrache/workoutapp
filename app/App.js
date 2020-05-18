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
import NewPlanScreen from './src/plans/NewPlan.js';

function HomeScreen({ route, navigation }) {
  const user = route.params;
  const buttonTitle = "Go to "+user.name+"'s PLANS";
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title={buttonTitle}
        onPress={() => navigation.navigate('Plans', { userId: user.id })}
      />
    </View>
  );
}

const Stack = createStackNavigator();

// TODO - TestUser... lol
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{id: 1, name: "TestUser"}}/>
        <Stack.Screen name="Plans" component={PlansScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="NewPlan" component={NewPlanScreen} options={{ title: "New Plan" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
