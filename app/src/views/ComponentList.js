import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles.js';

export default function getList(data, navigation) {
    console.log("GETTING COMPONENT LIST");
    console.log(data);
    let listData = data.exercises.map((a, i) => {
        console.log(a);
        const screenName = a.name;
        const exerciseId = a.id;
        a.userId = data.userId;
        a.workoutId = data.programId; // TODO - workout id doesn't exist yet; stop gap; need START workout
        return (
            <TouchableOpacity
                title=""
                style={styles.planExerciseListItem}
                key={exerciseId}
                onPress={() => navigation.push('WorkoutComponent', a)}
            >
                <Text>{screenName}</Text>
            </TouchableOpacity>
        );
    });
    console.log(listData);
    return listData;
}
