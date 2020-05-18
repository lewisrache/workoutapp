import * as React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    },
    planListItem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: "100%"
    },
    planExerciseListItem: {
        backgroundColor: '#9cf7f4',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: "100%"
    },
});
