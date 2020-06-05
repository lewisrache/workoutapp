// a button that is just an icon
<Button
  title="MY BUTTON"
  type="clear"
  icon={
    <Icon
      name="plus-circle"
      size={30}
      color="#03a30e"
    />
  }
  title=""
/>

// how to have two buttons beside each other:
<View style={{flexDirection:"row"}}>
    <Button
      title="buttonA"
      type="clear"
      icon={
        <Icon
          name="plus-circle"
          size={30}
          color="black"
        />
      }
      title=""
    />
    <Button
      title="buttonB"
      type="clear"
      icon={
        <Icon
          name="plus-circle"
          size={30}
          color="red"
        />
      }
      title=""
    />
</View>


// how to go back in navigation:
// kind of unnecessary considering that there's a back button at the top of the page but maybe
<TouchableOpacity title="Go back" onPress={() => navigation.goBack()} >
   <Text>Back</Text>
</TouchableOpacity>

// a reminder that TouchableOpacity allows you to make your own buttons, should you want to


// to get 2 rows of 5 lovely circles, they must be this size
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


// Picker that wasn't working
// import { Picker } from '@react-native-community/picker';
// let repPickers = repNumbers.map((value, index) => {
//     return (
//         <Picker.Item label={value} value={value} />
//     );
// });
// <Picker
//     selectedValue={currRepValue}
//     style={{height: 50, width: 100}}
//     onValueChange={(itemValue, itemIndex) =>
//         onChangeSetRepNumber({currRepValue: itemValue})
//     }
// >
//     {repPickers}
// </Picker>

// back when reps was gonna be a clicky button that took you to a screen with a list of numbers
// NOTE - the visual of this was kind of nice? maybe?
<TouchableOpacity
    title="Go to Details TESTo... "
    style={styles.planListItem}
    key="repNumbers"
    onPress={() => navigation.push('Reps', a)}
>
    <Text>Rep Numbers - possible unnecessary</Text>
</TouchableOpacity>

// example of adding a header button
// NOTE - doesn't work with tab navigation for ?reasons?
// const [count, setCount] = React.useState(0);
//
// React.useLayoutEffect(() => {
//   navigation.setOptions({
//     headerRight: () => (
//       <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//     ),
//   });
// }, [navigation, setCount]);
//
// return <Text>Count: {count}</Text>;

// button icons
// import Icon from 'react-native-vector-icons/FontAwesome';
// TODO - ICON for button isn't working currently:
// icon={
//   <Icon
//     name="arrow-right"
//     size={15}
//     color="white"
//   />
// }
