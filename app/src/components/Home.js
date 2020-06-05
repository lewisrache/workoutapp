import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ route, navigation }) {
    console.log("here in the home screen");

  const user = route.params;
  const buttonTitle = "Go to "+user.name+"'s PLANS";

  return (
    <View style={styles.landingPage}>
      <Text>Home Screen</Text>
      <Button
        title={buttonTitle}
        onPress={() => navigation.navigate('Plans', { userId: user.id })}
      />
    </View>
  );
}
