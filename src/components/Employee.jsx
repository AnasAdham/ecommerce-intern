import React from "react";

const Employee = (props) => {
  const { firstName } = props;
  return <h5>This is an employee with the name {firstName}</h5>;
};

export default Employee;
