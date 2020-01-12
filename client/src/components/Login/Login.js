import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert, Container } from 'reactstrap';
import { Link } from "react-router-dom";
import "./style.css";


function Login(props) {

        return(
        <Container>
        <div className="loginBox">
            <h2 className="loginTitle title-font">Login</h2>
            <hr/>
            {props.message ? (
                <Alert className="animated fadeIn" color="danger">{props.message}</Alert>
            ) : (<></>)}
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="username" value={props.username} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" current-password="current-password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
                {/* <FormGroup>
        <Label for="roleSelect">User Type</Label>
        <Input type="select" name="select" id="roleSelect">
          <option>Select</option>
          <option type="text" name="doctor" value={props.type} onChange={props.handleDocLogin}>Doctor</option>
          <option type="text" name="accountant" value={props.type} onChange={props.handleActLogin}>Accountant</option>

        </Input>
      </FormGroup> */}
                <Button id="loginBtn" onClick={props.handleActLogin} block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">Don't have an account?  Sign up here</Link>
                </p>
            </Form>
        </div>
        </Container>
        )
}


export default Login;