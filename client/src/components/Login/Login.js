import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert, Container } from 'reactstrap';
import { Link } from "react-router-dom";

function Login(props) {
    return (
        <Container>
        <div className="loginBox">
            <h2 className="loginTitle title-font">Login</h2>
            <hr/>
            {props.message ? (
                <Alert className="animated fadeIn" color="danger">{props.message}</Alert>
            ) : (<div></div>)}
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="username" value={props.username} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
                <Button id="loginBtn" onClick={props.handleLogin} block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">Dont have an account?  Sign up here</Link>
                </p>
            </Form>
        </div>
        </Container>
    );
}

export default Login;