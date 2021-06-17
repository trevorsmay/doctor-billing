import React from 'react';
import "./style.css";
import { Table, Container, Alert } from 'reactstrap';
// import API from '../../utils/API';
import { Input } from "../Form/index";
import procedure from './ptProcedure';


function Procedure(props) {

  console.log(procedure);


    return (
        <Container>
            <Table>
            <thead className="table-header">
        <tr>
          <th>EVALUATIONS</th>
          <th>Code</th>
          <th>MOD</th>
          <th>QTY</th>
          <th>Time Length</th>
          <th>Fee</th>
          <th>Total</th>
          <th>DX</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">{props.procedure.name}</th>
          <td>{props.procedure.id}</td>
          <td></td>
          <td>
          <Input/>
          </td>
          <td></td>
          <td>{props.procedure.cost}</td>
          <td ></td>
          </tr>
        </tbody>

            </Table>
        </Container>

    )
}

export default Procedure;