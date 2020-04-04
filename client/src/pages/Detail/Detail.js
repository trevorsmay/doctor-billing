import React, { Component } from "react";
import { Link } from "react-router-dom";
import DocPatient from "../../components/DocPatient";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Col, Row, Container, Jumbotron } from "reactstrap";


class Detail extends Component {
  state = {
    patient: {}
  };
  // When this component mounts, grab the patient with the _id of this.props.match.params.id
  // e.g. localhost:3000/profile/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPatient(this.props.match.params.id)
      .then(res => this.setState({ patient: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.patient.patientNumber} and {this.state.patient.serviceCost}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
                <DocPatient />

          <Col size="md-2">
            <Link to="/profile">← Return to Profile</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
