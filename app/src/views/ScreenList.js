import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles.js';
import { createStackNavigator } from '@react-navigation/stack';
import { Stack } from '../resources/GlobalConsts';
import Base from '../components/Base';
import PlansScreen from '../components/Plans';
import PlanScreen from '../components/Plan';
import ComponentScreen from '../components/ComponentTracker';
import NewPlanScreen from '../components/NewPlan';
import Exercise from '../components/Exercise';

export default function getScreenList() {
    return (
        <>
            <Stack.Screen name="Base" component={Base} options={{headerShown:false}}/>
            <Stack.Screen name="Plans" component={PlansScreen} />
            <Stack.Screen name="Plan" component={PlanScreen} options={({ route }) => ({ title: route.params.name })} />
            <Stack.Screen name="WorkoutComponent" component={ComponentScreen} options={({ route }) => ({ title: route.params.name })} />
            <Stack.Screen name="NewPlan" component={NewPlanScreen} options={{ title: "New Plan" }} />
            <Stack.Screen name="NewExercise" component={Exercise} />
        </>
    );
}
