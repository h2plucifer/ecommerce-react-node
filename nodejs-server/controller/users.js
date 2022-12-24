import mongoose from "mongoose";
import User from "../model/User.js";
import axios from "axios"; //For dummy data fetch
export const getUsers = async (req, res, next) => {
  // User.find().then(data=>res.status(200).json({users:data}))
  axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then((users) => {
      res.status(200).json(users.data);
    })
    .catch((err) => console.log("Error fetching users : ", err.message));
};
