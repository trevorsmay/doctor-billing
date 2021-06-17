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
    return axios.get("/api/patients");
    },

  //gets all patients with the given id
    getPatient: function(id) {
    return axios.get("/api/patients/" + id);
    },


  //deletes the patient with given ID
    deletePatient: function(id) {
    return axios.delete("/api/patients/" + id);
    },

  //saves a patient to the database
    savePatient: function(patientData) {
    return axios.post("/api/patients/", patientData);
    },

    getProcedures: function() {
      return axios.get("/api/procedures");
    },

    getProcedure: function(codeId) {
      return axios.get("/api/procedures/" + codeId);
    },

    getFee: function(fee) {
      return axios.get("/api/patients/" + fee);
    },

    deleteProcedure: function(codeId) {
      return axios.delete("/api/procedures/" + codeId);
    },

    saveProcedure: function(procedureData) {
      return axios.post("/api/procedures/", procedureData)
    }
    };

