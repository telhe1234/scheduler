export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let correspondingDayObj;
  let appointmentsArray = [];
  for (const dayObj of state.days) {
    if(dayObj.name === day) {
      correspondingDayObj = dayObj;
    }
  }
  if (correspondingDayObj === undefined) return [];
  for (let appointmentId of correspondingDayObj.appointments) {
    let appointmentObj = state.appointments[appointmentId];
    if (appointmentObj) {appointmentsArray.push(appointmentObj)};
  }
  return appointmentsArray;
  // console.log(correspondingDayObj);
}