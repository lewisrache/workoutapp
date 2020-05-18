import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    TouchableHighlight
    } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useQuery } from 'react-query';
import { getPlans, getPlanExercises } from '../routes.js';
import { styles } from '../styles.js';

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

    // TODO - probably exercises need to be a clicky list too??
    const Exercises = data.map((exercise, i) => {
        console.log(exercise);
        return (
            <Text style={styles.planExerciseListItem} key={exercise.id}>{exercise.name}</Text>
        );
    });

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Plan: {plan.name}</Text>
            { Exercises }
        </View>
    );
}
