"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  try {
    const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
    return mockDBCall(dataAccessMethod);
  } catch (err) {
    console.log(err);
  }
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    const ageObj = {};
    _.filter(db.usersById, (userInfo) => {
      const username = userInfo.username;
      return db.itemsOfUserByUsername[username].includes(item);
    }).forEach((userInfo) => {
      const age = userInfo.age;
      ageObj[age] = ageObj[age] + 1 || 1;
    });

    const ageList = [];
    Object.entries(ageObj).forEach(([key, value]) => {
      ageList.push({ age: key, count: value });
    });
    return ageList;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
