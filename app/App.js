import * as React from 'react';
import getList from './src/views/PlanList.js';
import getScreenList from './src/views/ScreenList.js';
import LoginScreen from './src/components/LoginScreen.js';
import LoadingScreen from './src/components/LoadingScreen.js';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Stack, AuthContext } from './src/resources/GlobalConsts';
import { AppName } from './src/resources/TextValues';

const ScreenList = getScreenList();

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

  // TODO - can put a header inside the navigation container but outside the screens.
  // unsure if this is the best way or not, but for now... i will do that.
  // TODO - shouldn't show LOG OUT while logged out, but whatever.
  // okay well that didn't even work. i can make text appear but the button decides not to.
  // FINE. for now, we can only log out from the home screen. whatever.

    function LoggedInScreen({navigation}) {
        // TODO - move to file; rename
        // TODO - needs a title.
        const { signOut } = React.useContext(AuthContext);

        React.useLayoutEffect(() => {
            navigation.setOptions({
                headerRight: () => (
                    <Button onPress={signOut} title="Log out" />
                ),
            });
        }, [navigation]);
        return (
            <Stack.Navigator>
                {ScreenList}
            </Stack.Navigator>
        );
    }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={LoadingScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={LoginScreen}
              options={{
                title: AppName,
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen
                name="LoggedInScreen"
                component={LoggedInScreen}
                options={{title: AppName}}
            />
          )}
          </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
