import axios from "axios";

export  default  {
    // logs in user
    login: function(loginInfo) {
      return axios.post("/api/users/login", loginInfo);
    },
  
    // signs up user, then logs them in
    signup: function(signupInfo) {
      return axios.post("/api/users/signup", signupInfo);
    },
  
    // checks to see if user is logged in, then returns the user
    isLoggedIn: function() {
      return axios.get("/api/users/profile");
    },
  
    // checks to see if the user is logged in and and admin, then returns the user
    isAdmin: function() {
      return axios.get("/api/users/logout")
    },

    // logs out the user
    logout: function() {
    return axios.get("/api/users/logout")
    },

  // gets all patients
    getPatients: function() {
    return axios.get("/api/patient");
    },

  //gets all patients with the given id
    getPatient: function(id) {
    return axios.get("/api/patient/" + id);
    },

  //delets the patient with given ID
    deletePatient: function(id) {
    return axios.delete("/api/patient/" + id);
    },

  //saves a patient to the database
    savePatient: function(patientData) {
    return axios.post("/api/patient", patientData);
    },

    getProcedures: function() {
      return axios.get("/api/procedure");
    },

    getProcedure: function(id) {
      return axios.get("/api/procedure/" + id);
    },

    deleteProcedure: function(id) {
      return axios.delete("/api/procedure/" + id);
    },

    saveProcedure: function(procedureData) {
      return axios.post("/api/procedure", procedureData)
    }
    };

