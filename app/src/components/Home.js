import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { AuthContext } from '../../App.js';

export default function HomeScreen({ route, navigation }) {
    console.log("here in the home screen");
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

  const user = route.params;
  const buttonTitle = "Go to "+user.name+"'s PLANS";

  const { signOut } = React.useContext(AuthContext);


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={signOut} title="Log out" />
            ),
        });
    }, [navigation]);
    // <Button
    //   title={buttonTitle}
    //   onPress={() => navigation.navigate('Plans', { userId: user.id })}
    // />
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title={buttonTitle}
        onPress={() => navigation.navigate('Plans', { userId: user.id })}
      />
    </View>
  );
}
