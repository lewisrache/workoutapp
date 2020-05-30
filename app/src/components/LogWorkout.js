import * as React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    TouchableHighlight
    } from "react-native";
import { Button } from 'react-native-elements';
import { useQuery } from 'react-query';
import { createPlan } from '../routes.js';
import { styles } from '../styles.js';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
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
