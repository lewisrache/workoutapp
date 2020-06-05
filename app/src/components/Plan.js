import * as React from 'react';
import {
    View,
    Text,
    ActivityIndicator
    } from "react-native";
import { Button } from 'react-native-elements';
import { useQuery } from 'react-query';
import { getPlanExercises, startWorkout, completeWorkout } from '../routes.js';
import { styles } from '../styles.js';
import getList from '../views/ComponentList.js';

export default function PlanScreen({ route, navigation }) {
    // TODO - back button should be in the header maybe
    // TODO - how to update the title dynamically?
    // TODO - get the plan contents
    const plan = route.params;
    console.log(plan);
    console.log("getting plan screen");
    const [currentWorkoutId, setCurrentWorkoutId] = React.useState(plan.currentWorkoutId);
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

    let megadata = {exercises:data, userId:plan.userId, workoutId:currentWorkoutId};
    const Exercises = getList(megadata, navigation);
// TODO - start and complete should never exist at the same time

    const startWorkoutFromProgram = async(data) => {
        let workout = await startWorkout(data).then(response => response.json());
        console.log(workout);
        setCurrentWorkoutId(workout.id);
    };

    const completeWorkoutFromProgram = async(data) => {
        let workout = await completeWorkout(data).then(response => response.json());
        console.log(workout);
        if (workout.success == true) {
            setCurrentWorkoutId(undefined);
        } else {
            alert('failed to complete'); // TODO - shouldn't do this... mostly this if statement is for testing anyway
            return;
        }
    };

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
              title="Start Workout"
              onPress={() => {
                  if (currentWorkoutId != undefined) {
                      alert("already started! someone should really disable this button");
                      return;
                  }
                  console.log("clicked start workout button");
                  let newWorkoutData = {userId:plan.userId, programId:plan.id};
                  startWorkoutFromProgram(newWorkoutData);
              }}
            />
            <Button
              title="Complete Workout"
              onPress={() => {
                  if (currentWorkoutId == undefined) {
                      alert("none started! someone should really disable this button");
                      return;
                  }
                  console.log("clicked complete workout button");
                  console.log(currentWorkoutId);
                  completeWorkoutFromProgram({id:currentWorkoutId});
              }}
            />
        </View>
    );
}
