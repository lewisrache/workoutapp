import * as React from 'react';
import { View, Text } from 'react-native';
import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    TouchableHighlight
    } from "react-native";
import { Button, Input } from 'react-native-elements';
import { useQuery } from 'react-query';
import { getPlans, getPlanExercises } from '../routes.js';
import { styles } from '../styles.js';
import { useForm } from "react-hook-form";
import { recordedExercise } from '../routes.js';

export default function Exercise() {
    const {register, watch, getValues, setValue, handleSubmit, formState} = useForm();
    const watchAllFields = watch();
    const weightInput = React.createRef();
    const [weightValue, onChangeWeightText] = React.useState("");
    const [repsValue, onChangeRepText] = React.useState("");
    const [setsValue, onChangeSetText] = React.useState("");
    const [nameValue, onChangeNameText] = React.useState("");

    // TODO - these are for a form thing that i don't know how do.
    register({name:'weight'});
    register({name:'reps'});
    register({name:'sets'});
    register({name:'exerciseName'});

    const { dirty, isSubmitting, touched, submitCount } = formState;
    const onSubmit = (data, e) => {
        console.log("Submit event", e);
        alert(JSON.stringify(data));
    };
    // NOTE: seem really...extra...to be using the useForm rn,
    // considering that ...i don't really do anything with it.
    // it allegedly works with react native but so far i ain't seeing how
    return (
        <View>
            <Text>This is where you will create exercises</Text>
            <Input
              placeholder="ExerciseName"
              name="exerciseName"
              onChangeText={text => onChangeNameText(text)}
              onChange={() => {
                  //TODO - isn't doing anything
                  setValue("exerciseName", nameValue);
              }}
              value={nameValue}
            />
            <Input
              placeholder="Weight"
              name="weight"
              ref={weightInput}
              onChangeText={text => onChangeWeightText(text)}
              value={weightValue}
            />
            <Input
              placeholder="Reps"
              name="reps"
              onChangeText={text => onChangeRepText(text)}
              value={repsValue}
            />
            <Input
              placeholder="Sets"
              name="sets"
              onChangeText={text => onChangeSetText(text)}
              value={setsValue}
            />
            <Button
                title="Save"
                onPress={() => {
                    // TODO - how get all the input
                    // in future, try again to use RHF. for now...just make it work.
                    console.log("saving...s Exercise");
                    setValue("weight", weightValue);
                    setValue("reps", repsValue);
                    setValue("sets", setsValue);
                    console.log(getValues());
                    handleSubmit(onSubmit);
                    console.log({ dirty, isSubmitting, touched, submitCount });

                    let formData = {
                        weight: weightValue,
                        reps: repsValue,
                        sets: setsValue,
                        exerciseName: nameValue
                    };
                    console.log(formData);
                    let result = recordedExercise(formData);
                }}
            />
        </View>
    );
}
