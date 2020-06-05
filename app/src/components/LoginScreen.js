import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { userLogin } from '../routes.js';
import { AuthContext } from '../../App.js';

// TODO - on login, need to run the auth, and only navigate after successful login. and tokens need to be used, not just ids
export default function LoginScreen({ route, navigation }) {
    console.log(route);

      const [username, setUsername] = React.useState('');
      const [password, setPassword] = React.useState('');

      const { signIn } = React.useContext(AuthContext);

      function login() {
          userLogin({ username, password });
          signIn({ username, password });
      }

      return (
        <View>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Sign in" onPress={() => login()} />
        </View>
      );
}
