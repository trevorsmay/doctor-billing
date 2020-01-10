import React from "react";
import { Button, Container, CardTitle, CardText, Row, Col, Card } from "reactstrap";
import "./style.css";


const ProfileBox = (props) => {
    return (
        <Container>
            <Row>
                <Col sm="6">
                <Card body className="body">
          <CardTitle>Doctors Sign in Here</CardTitle>
          <CardText>Sign in to add patient information</CardText>
          <Button href="/login">Enter</Button>
        </Card>
                </Col>
                <Col sm="6">
                <Card body className="body">
          <CardTitle>Accountants Sign in Here</CardTitle>
          <CardText>View patient</CardText>
          <Button href="/login">Enter</Button>
        </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileBox;