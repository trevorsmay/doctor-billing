import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

// export function SelectInput(props) {
//   return(
//     <div className="form-group">
//       <input type="select"{...props}>
//       <option value="blank"></option>
//       <option value="true">Paid</option>
//       <option value="false">Open</option>
//       </input>
//     </div>
//   )
// }

export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }