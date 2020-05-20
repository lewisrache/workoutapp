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

export default function NewPlanScreen({ route, navigation }) {
    // const plan = route.params;
    // console.log(plan);
    // console.log("getting plan screen");
    // const { status, data, error, isFetching } = useQuery(
    //     plan.id && ["planExerciseQuery", plan.id],
    //     getPlanExercises
    // );
    // console.log({ status, data, error, isFetching });
    // if (isFetching) {
    //     // TODO - make this a core function
    //     return (
    //         <View style={styles.loader}>
    //           <ActivityIndicator size="large" color="#0c9"/>
    //         </View>
    //     )
    // }
    //
    // if (status == "error") {
    //     console.log(error.message);
    // }

    // old TextInput version:
    // const [value, onChangeText] = React.useState(placeholder);
    // return (<TextInput
    //     key={key}
    //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    //     onChangeText={text => onChangeText(text)}
    //     value={value}
    // />);
    function PlanTextInput(key, placeholderText) {
        return (
            <Input
              placeholder={placeholderText}
            />
        );
    }

    // TODO - will this be used again? should this be somewhere else?
    const ExerciseTypes = [{
      value: 'Cardio',
    }, {
      value: 'Strength (Weights)',
    }, {
      value: 'Other',
    }];
// TODO - this dropdown library is rife with bugs, being 2 years old. try to find something better
    const [selectedExerciseType, setExerciseType] = useState("");

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>New Plan</Text>
            {PlanTextInput('planName', 'Name')}

            <Dropdown
                data={ExerciseTypes}
                value={selectedExerciseType}
                label="My favourite actors"
                itemColor={'red'}
                containerStyle={{width:"100%"}}
                useNativeDriver={true}
                onChangeText={(value,index,data)=>setExerciseType(value)} />

            <Button
              title="Add Exercise CURRENTLY DOES NOTHING"
              onPress={() => console.log("clicked ADD exercise TO PLAN button")}
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
