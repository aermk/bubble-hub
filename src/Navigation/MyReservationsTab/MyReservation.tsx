import React from "react";
import { Reservation } from "../../mock";
import { format } from "date-fns";

type MyReservationsPropsType = {
  listOfReservations: Reservation[];
  handleRemoveReservation: (id: string) => void;
};

export const MyReservations = (props: MyReservationsPropsType) => {
  return (
    <div className='flex-1 p-4'>
      <h1 className='mb-4 font-semibold text-xl'>
        3. Check your reservations:
      </h1>
      <div className='flex flex-col'>
        {props.listOfReservations.length ? (
          <ul>
            {props.listOfReservations.map((reservation, index) => (
              <li
                key={index}
                className='flex items-center justify-between mb-1 bg-neutral-50 p-1 rounded-md'
              >
                {format(new Date(reservation.date), "MMM dd, EEEE")},{" "}
                {reservation.startDatetime}
                {" - "}
                {reservation.endDatetime},{"  "}
                {reservation.name}
                <button
                  className='cancel-reservation-btn'
                  onClick={() => props.handleRemoveReservation(reservation.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-900'>
            Reservation list is empty. You can have{" "}
            <b>8 reservations in total</b>.
          </p>
        )}
        {props.listOfReservations.length >= 8 && (
          <p className='text-gray-900'>
            <b>You can't add more!</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default MyReservations;
