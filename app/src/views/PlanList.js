import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function getList(data, navigation) {
    console.log("GETTING LIST");
    console.log(data);
    let listData = data.map((a, i) => {
        console.log(a);
        const screenName = a.name;
        const planId = a.id;
        return (
            <TouchableOpacity
                title="Go to Details TESTo... "
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
