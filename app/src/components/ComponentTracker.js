// ScreenA.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default function ComponentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="ONE DAY"
        onPress={() => navigation.navigate('Base')}
      />
    </View>
  );
}
