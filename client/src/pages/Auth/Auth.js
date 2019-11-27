import React, { Component } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/Signup";
import UserInfo from "../../components/UserInfo";
import API from "../../utils/API";
import "./Auth.css";

class Auth extends Component {

    state = {
        loggedIn: false,
        username: "",
        password: "",
        confirmPassword: "",
        user: null,
        message: ""
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleUserInfo = event => {
        event.preventDefault();
    }

    handleLogin = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.login({
                username: this.state.username,
                password: this.state.password
            }).then(user => {
                console.log(user);
                if (user.data.loggedIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("log in successful");
                    window.location.href = "/profile";
                }
                else if (user.data.message) {
                    this.setState({
                        message: user.data.message
                    })
                }
            });
        }
    }

    handleSignup = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.signup({
                username: this.state.username,
                password: this.state.password
            }).then(user => {
                if(user.date.loggIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                    console.log("login successful");
                    window.location.href = "/UserInfo";
                } else {
                    console.log("error")
                    console.log(user.data);
                    this.setState({
                        message: user.data
                    })
                }
            });
        }
    }
    handleInfoSubmit = event => {
        event.preventDefault();
        if(this.state.bodyType && this.state.goals) {

        }
    }

    render() {
        return (
            <div className="authBox">
                {(this.props.action === "login") ? (
                    <Login
                    username={this.state.username}
                    password={this.state.password}
                    handleLogin={this.handleLogin}
                    handleInputChange={this.handleInputChange}
                    message={this.state.message}
                    />
                ) : (this.props.action === "signup") ? (
                    <SignUp
                    username={this.state.username}
                    handleUserInfo={this.state.handleUserInfo}
                    confirmPassword={this.state.confirmPasswor}
                    handleSignup={this.handleSignup}
                    handleInputChange={this.handleInputChange}
                    message={this.state.message}
                    />
                ): <UserInfo
                    username={this.state.username}
                    handleUserInfo={this.state.handleUserInfo}
                    doctor={this.state.doctor}
                    accounting={this.state.accounting}
                />

                }
            </div>
        )
    }
}

export default Auth;


