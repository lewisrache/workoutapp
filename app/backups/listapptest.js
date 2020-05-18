import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ route, navigation }) {
  const {first} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { thing: first})}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const {thing} = route.params;
  const obj1 = {id:1,name:"one"};
  const obj2 = {id:2,name:"two"};
  const obj3 = {id:3,name:"three"};
  let data = [];
  data.push(obj1);
  data.push(obj2);
  data.push(obj3);
  const ClickyList = data.map((a, i) => {
            const screenName = a.name;
            const planId = a.id;
            return <TouchableOpacity
                title="Go to Details... "
                onPress={() => navigation.push('Details', {thing: planId})}
              >
                <Text>{screenName}</Text>
            </TouchableOpacity>
        });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      { ClickyList }
      <TouchableOpacity
        title="Go to Details... "
        onPress={() => navigation.push('Details')}
      >
         <Text>{thing}</Text>
     </TouchableOpacity>
      <TouchableOpacity title="Go to Home" onPress={() => navigation.navigate('Home')} >
         <Text>Home</Text>
     </TouchableOpacity>
      <TouchableOpacity title="Go back" onPress={() => navigation.goBack()} >
         <Text>Back</Text>
     </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{first: "homeOne"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





////// START LAST WORKING MODEL
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    TouchableHighlight
    } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenB from './src/components/ScreenB.js';
import ScreenA from './src/components/ScreenA.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="A">
        <Stack.Screen
            name="A"
            component={ScreenA}
            options={{ title: "Plans" }}
        />
        <Stack.Screen
            name="B"
            component={ScreenB}
            options={{ title: "Plan B" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default class Source extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Source Listing",
          headerStyle: {backgroundColor: "#fff"},
          headerTitleStyle: {textAlign: "center",flex: 1}
         };
    };
    constructor(props) {
        super(props);
            this.state = {
            loading: true,
            dataSource:[]
        };
    }
    componentDidMount(){
        fetch("http://localhost:8000/users/1/plans")
        .then(response => response.json())
        .then((responseJson)=> {
            console.log(responseJson);
            this.setState({
                loading: false,
                dataSource: responseJson
            })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width:"100%",
                backgroundColor:"rgba(0,0,0,0.5)",
            }}/>
        );
    }
    renderItem=(data)=>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="A">
          <Stack.Screen
              name="A"
              component={ScreenA}
              options={{ title: data.item.name }}
          />
          <Stack.Screen
              name="B"
              component={ScreenB}
              options={{ title: "Plan B" }}
          />
        </Stack.Navigator>
    </NavigationContainer>
    // <TouchableOpacity
    //     onPress={() => console.log(data.item.name + " has been clicked!")}
    //     style={styles.list}
    // >
    //     <Text style={styles.lightText}>{data.item.name}</Text>
    // </TouchableOpacity>
    render(){

        if(this.state.loading){
            return(
                <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }

        let Arr = this.state.dataSource.map((a, i) => {
            console.log("OBJ");
            const screenName = "A" + i;
            return <Stack.Screen
                name={screenName}
                component={ScreenA}
                options={{ title: "TEST" }}
            />//<View key={i} style={{ height:40, borderBottomWidth:2, borderBottomColor: '#ededed' }}><Text>TEXT</Text></View>
        })

        return(
            // <View style={styles.container}>
            // <Text>First</Text>
            // { Arr }
            // <Text>Second</Text>
            // <TouchableHighlight style={ styles.button } onPress={ () => this._onPressOut() }>
            //     <Text>Push</Text>
            // </TouchableHighlight>
            // </View>

                // <FlatList
                //     data= {this.state.dataSource}
                //     ItemSeparatorComponent = {this.FlatListItemSeparator}
                //     renderItem= {item=> this.renderItem(item)}
                //     keyExtractor= {item=>item.id.toString()}
                // />

            // <View style={styles.container}>
            // <FlatList
            //     data= {this.state.dataSource}
            //     ItemSeparatorComponent = {this.FlatListItemSeparator}
            //     renderItem= {item=> this.renderItem(item)}
            //     keyExtractor= {item=>item.id.toString()}
            // />
            // </View>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="A">
                  { Arr }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
        margin: 5,
        backgroundColor: "#fff"
    }
});
////// END LAST WORKING MODEL






import * as React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from '@react-navigation/stack';

class QuestionDetailScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>QuestionDetail Screen</Text>
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}

class ListScreen extends React.Component {

  cb = () => {
    this.props.navigation.push('QuestionDetail');
  }
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) =>
             <TouchableOpacity onPress={() => this.cb()}>
                 <Text>{item.key}</Text>
             </TouchableOpacity>}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    QuestionDetail: {
      screen: QuestionDetailScreen,
    },
  },
  {
    initialRouteName: 'List',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
