// ScreenA.js
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from '../styles.js';
import NumericInput from 'react-native-numeric-input';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { recordedComponent } from '../routes.js';

export default function ComponentScreen({ route, navigation }) {
    const {userId, workoutId} = route.params;
    const exerciseId = route.params.id;

    const repNumbers = [...Array(10).keys()]; // NOTE - array 0-9
    //https://stackoverflow.com/questions/54679928/using-dynamic-var-with-set-state-in-react-hooks
    const [setReps, onChangeReps] = React.useState({});
    const [currRepValue, onChangeSetRepNumber] = React.useState({value:5});
    const [currWeightValue, onChangeWeightNumber] = React.useState({value:50}); // TODO - different for each
    function onChange(event) {
        const { name, value } = event.target;
        onChangeReps(prevState => ({ ...prevState, [name]: value }));
    }
    function getRepNumberSetter(setId) {
        let setRepMaxValue = 20;
        let setRepColours = {
            textColor:'#B0228C',
            rightButtonBackgroundColor:'#EA3788',
            leftButtonBackgroundColor:'#E56B70'
        };
        if (setId > currRepValue.value) {
            // "disable" sets we're not doing
            setRepMaxValue = 0;
            setRepColours = {
                textColor:'#999999',
                rightButtonBackgroundColor:'#999999',
                leftButtonBackgroundColor:'#999999'
            };
        }
        // TODO - figure out how to add padding to things
        // TODO - figure out how to force it back to 0 if it gets disabled
        return (
            <NumericInput
                value={setReps[setId]}
                onChange={value => onChangeReps(prevState => ({ ...prevState, [setId]: value }))}
                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                totalWidth={82}
                totalHeight={50}
                iconSize={25}
                step={1}
                minValue={0}
                maxValue={setRepMaxValue}
                valueType='real'
                rounded
                editable={false}
                textColor={setRepColours.textColor}
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor={setRepColours.rightButtonBackgroundColor}
                leftButtonBackgroundColor={setRepColours.leftButtonBackgroundColor}
            />
        );
    }
    const Circles = repNumbers.map((value, index) => {
        value = value+1;
        return getRepNumberSetter(value);
    });

    // TODO - is having ONE weight setter going to be generic enough for my likings?
    function getWeightSetter() {
        return (
            <View style={{flexDirection:"row"}}>
                <Text style={styles.componentLabel}>Weight (lbs)</Text>
                <NumericInput
                    value={currWeightValue.value}
                    onChange={value => onChangeWeightNumber({value})}
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={240}
                    totalHeight={50}
                    iconSize={25}
                    step={1}
                    minValue={1}
                    maxValue={1000}
                    valueType='real'
                    rounded
                    textColor='#B0228C'
                    iconStyle={{ color: 'white' }}
                    rightButtonBackgroundColor='#EA3788'
                    leftButtonBackgroundColor='#E56B70'
                />
            </View>
        );
    };

    function getNumSetSetter() {
        return (
            <View style={{flexDirection:"row"}}>
                <Text style={styles.componentLabel}>Number of Sets</Text>
                <NumericInput
                    value={currRepValue.value}
                    onChange={value => onChangeSetRepNumber({value})}
                    onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                    totalWidth={240}
                    totalHeight={50}
                    iconSize={25}
                    step={1}
                    minValue={1}
                    maxValue={10}
                    valueType='real'
                    rounded
                    textColor='#B0228C'
                    iconStyle={{ color: 'white' }}
                    rightButtonBackgroundColor='#EA3788'
                    leftButtonBackgroundColor='#E56B70'
                />
            </View>
        );
    };

    function saveWorkoutComponent() {
        let formData = {
            workout_id: workoutId,
            user_id: userId,
            exercise_id: exerciseId,
            componentName: route.params.name,
            data: {weight:currWeightValue.value, setReps:setReps}
        };
        console.log(formData);
        let result = recordedComponent(formData);
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {getWeightSetter()}
            {getNumSetSetter()}
            <Text style={styles.planListItem}>Reps/Set - see below</Text>
            <View style={{
                flexDirection:"row", flexWrap:"wrap"
            }}>
                { Circles }
            </View>
            <Button
                title="Save"
                onPress={() => {
                    console.log("component save");
                    saveWorkoutComponent();
                }}
            />
        </View>
  );
}
