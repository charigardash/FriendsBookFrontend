import axios from "axios";

// const API_URL = "http://localhost:8080/";
const API_URL = "https://friendbook-java.herokuapp.com/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = ({ username, password }) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response));
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};