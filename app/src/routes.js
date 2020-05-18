import * as React from 'react';

// TODO - pass in user id
export const getPlans = async () => {
    console.log("GETTING PLANS ASYNC");
    const data = await fetch("http://localhost:8000/users/1/plans")
                       .then(response => response.json());
    // syntactically equivalent:
    //    const response = await fetch("http://localhost:8000/users/1/plans")
    //    const data = await response.json();
    console.log(data);
    return data;
};

// TODO - pass in plan id
export const getPlanExercises = async () => {
    const data = await fetch("http://localhost:8000/plans/1/exercises")
                       .then(response => response.json());
    return data;
};
