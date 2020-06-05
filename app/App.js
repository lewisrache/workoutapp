import * as React from 'react';
// import { Button, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import getList from './src/views/PlanList.js';
import getScreenList from './src/views/ScreenList.js';
// import { useQuery } from 'react-query';
// import { getPlans, getPlanExercises, userLogin } from './src/routes.js';
// import { styles } from './src/styles.js';
import PlansScreen from './src/plans/Plans.js';
import PlanScreen from './src/plans/Plan.js';
import NewPlanScreen from './src/plans/NewPlan.js';
import LogWorkoutScreen from './src/components/LogWorkout.js';
import Exercise from './src/components/Exercise.js';
import ComponentScreen from './src/components/ComponentTracker.js';
import LoginScreen from './src/components/LoginScreen.js';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const ScreenList = getScreenList();
// -- moved HomeScreen to Home.js
// function HomeScreen({ route, navigation }) {
//     console.log("here in the home screen");
//     // TODO - okay, this only gets called on setup, so this isn't the right place for this. need a landing.
//     const user = route.params;
//     if (user.id === undefined) {
//         navigation.navigate('Login');
//         //return LoginScreen();
//     } else {
//         navigation.navigate('Plans', { userId: user.id });
//     }
//   const buttonTitle = "Go to "+user.name+"'s PLANS";
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title={buttonTitle}
//         onPress={() => navigation.navigate('Plans', { userId: user.id })}
//       />
//     </View>
//   );
// }
//
// -- moved to Base.js
// function Base() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomeScreen} initialParams={{id: 1, name: "TestUser"}} />
//             <Tab.Screen name="LogWorkout" component={LogWorkoutScreen} options={{ title: "Quick Workout" }} />
//         </Tab.Navigator>
//     );
// }
//
// const Tab = createBottomTabNavigator();
//
// // TODO - TestUser... lol
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Base" component={Base} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Plans" component={PlansScreen} />
//         <Stack.Screen name="Plan" component={PlanScreen} options={({ route }) => ({ title: route.params.name })} />
//         <Stack.Screen name="WorkoutComponent" component={ComponentScreen} options={({ route }) => ({ title: route.params.name })} />
//         <Stack.Screen name="NewPlan" component={NewPlanScreen} options={{ title: "New Plan" }} />
//         <Stack.Screen name="NewExercise" component={Exercise} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//
// export default App;











// the below is the react-native-navigation auth redirect example
// import * as React from 'react';
// import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}



// const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={LoginScreen}
              options={{
                title: 'Sign in',
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <>
                {ScreenList}
            </>
          )}
          </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
