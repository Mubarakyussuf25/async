const { v4 } = require("uuid");

// Factory function [Don't Change]
const buildData = (usernames, foods) => {
  const foodRecords = foods.map((name) => ({
    uid: v4(),
    name,
  }));

  const userRecords = usernames.map((name, idx) => ({
    uid: v4(),
    name,
    food: foodRecords[idx].uid,
  }));

  return {
    users: userRecords,
    foods: foodRecords,
  };
};

// Create DB
const data = buildData(
  ["John", "Bob", "Sarah", "Faye"],
  ["Pizza", "Indian", "Thai", "American"]
);

const queryUser = (name) => {
  if (!name) {
    return Promise.reject(new Error("name is required"));
  }
  const result = {
    query: data.users.filter((u) => u.name === name)[0],
  };
  if (!result.query) {
    return Promise.reject(new Error(`User with name ${name} not found`));
  }
  return Promise.resolve(result.query);
};

const queryFood = (uid) => {
  if (!uid) {
    return Promise.reject(new Error("uid is required"));
  }
  const result = {
    query: data.foods.filter((u) => u.uid === uid)[0],
  };
  if (!result.query) {
    return Promise.reject(new Error(`Food with uid ${uid} not found`));
  }
  return Promise.resolve(result.query);
};


// Fetch data
// const findFavouriteFood = (name, callback) => {
//   queryUser(name, (result) => {
//     queryFood(result.food, (result) => {
//       callback(result.name);
//     });
//   });
// };
const findFavouriteFood = (name) => {
  return queryUser(name)
    .then((user) => queryFood(user.food))
    .then((food) => food.name);
};


// findFavouriteFood("John", console.log);
// findFavouriteFood("Bob", console.log);
// findFavouriteFood("Sarah", console.log);
// findFavouriteFood("Faye", console.log);

findFavouriteFood("John").then(console.log);
findFavouriteFood("Bob").then(console.log);
findFavouriteFood("Sarah").then(console.log);
findFavouriteFood("Faye").then(console.log);

