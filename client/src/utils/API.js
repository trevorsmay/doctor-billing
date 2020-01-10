import axios from "axios";


export  default  {
  // logs in doctor
  docLogin: function(loginInfo) {
    return axios.post("/api/users/doctorpage", loginInfo);
  },
  //logs in accountant
  actLogin: function(loginInfo) {
    return axios.post("/api/users/accountpage", loginInfo);
  },
  // signs up doctor, then logs them in
  docSignup: function(signupInfo) {
    return axios.post("/api/users/auth", signupInfo);
  },

  actSignup: function(signupInfo) {
    return axios.post("/api/users/auth", signupInfo);
  },
  // checks to see if doc user is logged in, then returns the user
  isDocLoggedIn: function() {
    return axios.get("/api/users/doctorpage");
  },
// checks to see if accountant is logged in
  isAccountLoggedIn: function() {
      return axios.get("/api/users/accountpage");
  },

  //saves user workouts to mongo
  updateProfile: function(userInfo){
    return axios.put("/api/users/updateProfile", userInfo);
  },

  customerInfo: function(updatePatient){
    return axios.put("/api/users/updatePatient", updatePatient);
  },

  retrieveInfo: function(patientInfo) {
    return axios.get("/api/users/retrieveInfo", patientInfo);
  },
  // checks to see if the user is logged in and and admin, then returns the user
//   isAdmin: function() {
//     return axios.get("/api/users/logout")
//   },
  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

};

