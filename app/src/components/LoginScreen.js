import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { userLogin } from '../routes';
import { styles } from '../styles';
import { AuthContext } from '../resources/GlobalConsts';

// TODO - tokens need to be used, not just ids
export default function LoginScreen({ route, navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);

    const login = async() => {
        // validate fields filled in
        console.log({ username, password });
        if (username.length == 0 || password.length == 0) {
            console.log('undefined!!!!!');
            alert("be better than this."); // TODO
            return false;
        }
        let result = await userLogin({ username, password }).then(response=>response.json());
        console.log(result);
        console.log("what.");
        if (result.isAuthenticated) {
            signIn({ username, password });
        } else {
            alert("bad.");
        }
    }

    return (
        <View>
            <TextInput
                style={styles.loginFormInputComponent}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.loginFormInputComponent}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => {console.log("logging in..."); login();}} />
        </View>
    );
}
