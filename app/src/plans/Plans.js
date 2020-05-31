import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import getList from '../views/PlanList.js';
import { useQuery } from 'react-query';
import { getPlans, getPlanExercises } from '../routes.js';
import { styles } from '../styles.js';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PlansScreen({ route, navigation }) {
  const {userId} = route.params;
  const { status, data, error, isFetching } = useQuery(
      userId && ["plansQuery", userId],
      getPlans
  );
  console.log("STATUS "+status+" / DATA "+data+" / ERROR "+error+" / ISFETCHING "+isFetching);
  if (isFetching) {
      return (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
      )
  }
  let megadata = {programs:data, userId:userId};
  const ClickyList = getList(megadata, navigation);
  console.log(ClickyList);
  // TODO - button onPress function: navigation.navigate('NewPlan', {userId: userId})
  // TODO - but...that should maybe be abstracted out anyhow

  // TODO - ICON for button isn't working currently:
  // icon={
  //   <Icon
  //     name="arrow-right"
  //     size={15}
  //     color="white"
  //   />
  // }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here are your current workout plans:</Text>
      { ClickyList }
      <Button
        title="Add New Plan"
        onPress={() => navigation.navigate('NewPlan', {userId: userId})}
      />

      <Button
        title="MY BUTTON"
        type="clear"
        icon={
          <Icon
            name="plus-circle"
            size={30}
            color="#03a30e"
          />
        }
        title=""
      />
      <TouchableOpacity title="Go to Home" onPress={() => navigation.navigate('Home')} >
         <Text>Home</Text>
     </TouchableOpacity>
      <TouchableOpacity title="Go back" onPress={() => navigation.goBack()} >
         <Text>Back</Text>
     </TouchableOpacity>
     <View style={{flexDirection:"row"}}>
         <Button
           title="buttonA"
           type="clear"
           icon={
             <Icon
               name="plus-circle"
               size={30}
               color="black"
             />
           }
           title=""
         />
         <Button
           title="buttonB"
           type="clear"
           icon={
             <Icon
               name="plus-circle"
               size={30}
               color="red"
             />
           }
           title=""
         />
     </View>
    </View>
  );
}
