import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import getList from '../views/PlanList.js';
import { useQuery } from 'react-query';
import { getPlans } from '../routes.js';
import { styles } from '../styles.js';
import { Button } from 'react-native-elements';

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
  // TODO - should navigation be abstracted out somehow?

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here are your current workout plans:</Text>
      { ClickyList }
      <Button
        title="Add New Plan"
        onPress={() => navigation.navigate('NewPlan', {userId: userId})}
      />
    </View>
  );
}
