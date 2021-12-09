import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const {days, value, onChange} = props;
  const parsedDays = days.map(day => (
    <DayListItem
      key={day.id}
      name = {day.name}
      spots = {day.spots}
      selected = {value === day.name}
      // {props.day === day.name ? {selected: true} : ''}
      setDay = {onChange}
    />
  ));
  return (
  <ul>
    {parsedDays}
  </ul>);
}