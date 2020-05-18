import * as React from 'react';

// TODO - pass in user id
const getPlans = async () => {
    console.log("GETTING PLANS ASYNC");
  const { data } = await fetch(
    "http://localhost:8000/users/1/plans"
  );
  console.log(data);
  return data;
};

// TODO - pass in plan id
const getPlanExercises = async () => {
  const { data } = await fetch(
    "http://localhost:8000/plans/1/exercises"
  );
  return data;
};
