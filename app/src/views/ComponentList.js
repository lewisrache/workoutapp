import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles.js';

export default function getList(data, navigation) {
    console.log("GETTING COMPONENT LIST");
    console.log(data);
    let listData = data.map((a, i) => {
        console.log(a);
        const screenName = a.name;
        const exerciseId = a.id;
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
