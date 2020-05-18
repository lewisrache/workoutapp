// ScreenA.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to B"
        onPress={() => navigation.navigate('B', {planId: 1})}
      />
    </View>
  );
}
