import * as React from 'react';
import { useState } from 'react';
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import Exercise from './Exercise.js';

export default function LogWorkoutScreen({ route, navigation }) {
// TODO - add exercise
// TODO - uhh... yeah. what all.

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>New Workout</Text>

            <Button
              title="Add Exercise CURRENTLY DOES NOTHING"
              onPress={() => {
                  console.log("clicked ADD exercise TO PLAN button");
                  navigation.navigate("NewExercise");
              }}
            />
            <Text>Here would be a list of exercises added to the plan</Text>
            <Button
                title="Save"
                onPress={() => {
                    // TODO - how get all the input
                    console.log("saving");
                }}
            />
        </View>
    );
}
