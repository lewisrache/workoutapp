import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import LogWorkoutScreen from './LogWorkout';

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('../../assets/logotest.png')}
//     />
//   );
// }
// options={({ navigation, route }) => ({
// headerTitle: props => <LogoTitle {...props} />,
// })} -- appears header doesn't work with tab navigator??
export default function Base() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} initialParams={{id: 1, name: "TestUser"}} />
            <Tab.Screen name="LogWorkout" component={LogWorkoutScreen} options={{ title: "Quick Workout" }} />
        </Tab.Navigator>
    );
}
