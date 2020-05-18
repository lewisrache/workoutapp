import * as React from 'react';
import { Button, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import getList from '../views/PlanList.js';
import { useQuery } from 'react-query';
import { getPlans, getPlanExercises } from '../routes.js';
import { styles } from '../styles.js';

export default function PlansScreen({ route, navigation }) {
  const {thing} = route.params;
  const { status, data, error, isFetching } = useQuery("plansQuery", getPlans);
  console.log("STATUS "+status+" / DATA "+data+" / ERROR "+error+" / ISFETCHING "+isFetching);
  if (isFetching) {
      return (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
      )
  }

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
