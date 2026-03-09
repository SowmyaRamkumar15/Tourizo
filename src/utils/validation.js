export const validateBooking = (data) => {

  if (!data.name) return "Name is required";
  if (!data.email) return "Email is required";
  if (!data.destination) return "Select a destination";
  if (!data.date) return "Select travel date";
  if (!data.people || data.people <= 0) return "Enter valid number of people";

  return null;
};