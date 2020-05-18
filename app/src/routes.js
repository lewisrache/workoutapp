import * as React from 'react';

export const getPlans = async (key, userId) => {
    console.log("GETTING PLANS ASYNC for "+userId);
    const data = await fetch("http://localhost:8000/users/"+userId+"/plans")
                       .then(response => response.json());
    // syntactically equivalent:
    //    const response = await fetch("http://localhost:8000/users/1/plans")
    //    const data = await response.json();
    console.log(data);
    return data;
};

export const getPlanExercises = async (key, planId) => {
    console.log("fetching for "+planId);
    const data = await fetch("http://localhost:8000/plans/"+planId+"/exercises")
                       .then(response => response.json())
                       .catch(error=>console.log(error)); // TODO - catch isn't working :(
    return data;
};

// TODO - this might not be the right thing... since create isn't really a "fetch"
// TODO - how pass in POST data?
export const createPlan = async (key, userId) => {
    console.log("creating for "+userId);
    const data = await fetch("http://localhost:8000/plans/"+userId+"/exercises")
                       .then(response => response.json())
                       .catch(error=>console.log(error)); // TODO - catch isn't working :(
    return data;
};
