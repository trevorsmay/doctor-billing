import React from 'react';
import "./style.css";
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Container
} from 'reactstrap';

const IntroCard = (props) => {
  return (
    <Container className="cards">
    <CardColumns>
      <Card className="doctor-card">
        <CardBody>
          <CardTitle>For Doctors</CardTitle>
          <CardText>This content will explain why a doctor could benefit from using me.</CardText>
          <Button className="button" href="/login">Start Now</Button>
        </CardBody>
      </Card>
      <CardBody>

      </CardBody>
      {/* <Card body inverse color="primary">
        <CardTitle>Mission Statement</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
      <Card>
        <CardBody>
        <CardTitle>Mission Statement</CardTitle>
          <CardText>This software reduces the need for in person visits!</CardText>
        </CardBody>
      </Card> */}
      <Card className="accountant-card">
        <CardBody>
          <CardTitle>For Accountants</CardTitle>
          <CardText>This card will explain why an accountant will love using me.</CardText>
          <Button className="button" href="/login">Start now</Button>
        </CardBody>
      </Card>
    </CardColumns>
    </Container>
  );
};

export default IntroCard;
