import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles.js';

export default function getList(data, navigation) {
    console.log("GETTING LIST");
    console.log(data);
    let programs = data.programs;
    const userId = data.userId;
    let listData = programs.map((a, i) => {
        console.log(a);
        a.userId = userId;
        const screenName = a.name;
        const planId = a.id;
        return (
            <TouchableOpacity
                title="Go to Details TESTo... "
                style={styles.planListItem}
                key={planId}
                onPress={() => navigation.push('Plan', a)}
            >
                <Text>{screenName}</Text>
            </TouchableOpacity>
        );
    });
    console.log(listData);
    return listData;
}
