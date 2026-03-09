let bookings=[];
export const addBooking = (booking)=>{
    bookings.push({
        id:Date.now(),
        ...booking
    });

return "Booking Successful";
};
export const getBooking = () =>{
    return bookings;
};