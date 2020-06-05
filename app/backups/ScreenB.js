// ScreenB.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default function ScreenB({route}) {
    const { planId } = route.params;
    // const ClickyList = data.map((a, i) => {
    //     const screenName = a.name;
    //     const planId = a.id;
    //     return
    //         <TouchableOpacity
    //             title="Go to Details... "
    //             onPress={() => navigation.push('Details', {thing: planId})}
    //         >
    //             <Text>{screenName}</Text>
    //         </TouchableOpacity>
    // });
    //const planId = route.params.planId;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>B SCREEN</Text>
            <Text>planId: {planId}</Text>
        </View>
    );
}
