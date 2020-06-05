import * as React from 'react';
import {
    View,
    Text,
    ActivityIndicator
    } from "react-native";
import { Button } from 'react-native-elements';
import { useQuery } from 'react-query';
import { getPlanExercises } from '../routes.js';
import { styles } from '../styles.js';
import getList from '../views/ComponentList.js';

export default function PlanScreen({ route, navigation }) {
    // TODO - back button should be in the header maybe
    // TODO - how to update the title dynamically?
    // TODO - get the plan contents
    const plan = route.params;
    console.log(plan);
    console.log("getting plan screen");
    const { status, data, error, isFetching } = useQuery(
        plan.id && ["planExerciseQuery", plan.id],
        getPlanExercises
    );
    // TODO - need to pass {userId: userId}
    console.log({ status, data, error, isFetching });
    if (isFetching) {
        // TODO - make this a core function
        return (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#0c9"/>
            </View>
        )
    }

    if (status == "error") {
        console.log(error.message);
    }

    let megadata = {exercises:data, userId:plan.userId, programId:plan.id};
    const Exercises = getList(megadata, navigation);

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Plan: {plan.name}</Text>
            { Exercises }
            <Button
              title="Add Exercise to Workout"
              onPress={() => console.log("clicked new exercise button")}
            />
            <Button
              title="Complete Workout"
              onPress={() => console.log("clicked complete workout button")}
            />
        </View>
    );
}