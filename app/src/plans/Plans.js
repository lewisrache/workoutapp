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

export default class Plans extends React.Component {
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
