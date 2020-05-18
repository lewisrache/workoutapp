import 'react-native-gesture-handler';
import React from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    NavigationContainer
    } from "react-native";
import Plans from "./src/plans/Plans.js";
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
        Plans();
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
    <TouchableOpacity
        onPress={() => console.log(data.item.name + " has been clicked!")}
        style={styles.list}
    >
        <Text style={styles.lightText}>{data.item.name}</Text>
    </TouchableOpacity>
    render(){
        if(this.state.loading){
            return(
                <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }
        return(
            <View style={styles.container}>
            <FlatList
                data= {this.state.dataSource}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem= {item=> this.renderItem(item)}
                keyExtractor= {item=>item.id.toString()}
            />
            </View>
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
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    }
});
