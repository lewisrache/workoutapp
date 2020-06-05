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
export const createPlan = async (data) => {
    console.log("creating plan");
    console.log(data);
    const responseJson = await fetch('http://localhost:8000/plans/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json());
    console.log(responseJson);
    return responseJson;
};

export const recordedExercise = async (data) => {
    console.log("recording exercise");
    console.log(data);
    console.log(JSON.stringify(data));
    const response = await fetch('http://localhost:8000/exercises/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(response);
    return response;
    //.then(response => response.json());
    console.log(responseJson);
    return responseJson;
};

export const recordedComponent = async (data) => {
    console.log("recording component");
    console.log(JSON.stringify(data));
    const response = await fetch('http://localhost:8000/components/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(response);
    return response;
};

export const userLogin = async (data) => {
    console.log("user login");
    console.log(JSON.stringify(data));
    // TODO - are passwords supposed to be sent pre-hashed, or are they just supposed to be encrypted/SSL?
    const response = await fetch('http://localhost:8000/users/login/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(response);
    return response;
};
