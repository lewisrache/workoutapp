// ScreenA.js
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { styles } from '../styles.js';
import NumericInput from 'react-native-numeric-input';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ComponentScreen({ navigation }) {
    const repNumbers = [...Array(10).keys()]; // NOTE - array 0-9
    // let repPickers = repNumbers.map((value, index) => {
    //     return (
    //         <Picker.Item label={value} value={value} />
    //     );
    // });
    const Circles = repNumbers.map((value, index) => {
        value = value+1;
        return (
            <Button
              title="buttonA"
              type="clear"
              icon={
                <Icon
                  name="plus-circle"
                  size={75}
                  color="black"
                />
              }
              title=""
            />
        );
    });

    // <Picker
    //     selectedValue={currRepValue}
    //     style={{height: 50, width: 100}}
    //     onValueChange={(itemValue, itemIndex) =>
    //         onChangeSetRepNumber({currRepValue: itemValue})
    //     }
    // >
    //     {repPickers}
    // </Picker>

    const [currRepValue, onChangeSetRepNumber] = React.useState(5);
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Number Reps Selected</Text>
            <NumericInput
                value={currRepValue}
                onChange={value => onChangeSetRepNumber({value})}
                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                totalWidth={240}
                totalHeight={50}
                iconSize={25}
                step={1}
                minValue={0}
                maxValue={10}
                valueType='real'
                rounded
                textColor='#B0228C'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#EA3788'
                leftButtonBackgroundColor='#E56B70'
            />

            <TouchableOpacity
                title="Go to Details TESTo... "
                style={styles.planListItem}
                key="repNumbers"
                onPress={() => navigation.push('Reps', a)}
            >
                <Text>Rep Numbers - possible unnecessary</Text>
            </TouchableOpacity>
            <View style={{
                flexDirection:"row", flexWrap:"wrap"
            }}>
                { Circles }
            </View>
            <Button
                title="Save"
                onPress={() => console.log("component save")}
            />
        </View>
  );
}
