import React from "react";
import "./style.css";
import { Jumbotron, Container, Button } from "reactstrap";

function Banner (props){
    return(
        <Container className="jumbotron">
        <Jumbotron className = "title"><strong><h1>Doctor Pro-Biller</h1></strong>
        <h3>Simplifying information communication for doctors and their bookkeepers.</h3>
        <Button color="secondary" size="lg" href="/signup">Sign Up!</Button>
         </Jumbotron>
         </Container>
    )
}
export default Banner;