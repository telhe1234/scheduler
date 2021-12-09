import './styles.scss';
import React from 'react';

export default function Appointment(props) {
  return (
    <article className="appointment">
      <h4 className="text--semi-bold">
        {props.time ? `Appointment at ${props.time}` : "No Appointments"}
      </h4>
    </article>
  );
}