import React, { Fragment } from "react";
import Form from "./Form";
import Shots from "./Shots";
import Workouts from "./Workouts";

export default function Dashboard() {
  return (
    <Fragment>
      <Shots />
      <Form />
      <Workouts />
    </Fragment>
  );
}
