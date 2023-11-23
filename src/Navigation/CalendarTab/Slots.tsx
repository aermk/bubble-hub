import React from "react";
import { Slot } from "./Slot";
import { Reservation, TimeSlot } from "../../mock";
import { format } from "date-fns";

type SlotsPropsType = {
  machinesStructure: TimeSlot[];
  formatedSelectedDate?: string;
  handleAddReservation: (reservation: Reservation) => void;
  selectedDay: Date;
  listOfReservations: Reservation[];
};

export const Slots = (props: SlotsPropsType) => {
  return (
    <div className='flex-1 p-4'>
      <h1 className='mb-4 font-semibold text-xl'>
        2. Choose available time slot:
      </h1>
      <div className='flex flex-col'>
        <h2 className='font-semibold text-gray-900 mb-4'>
          Schedule for{" "}
          <time dateTime={format(props.selectedDay, "yyyy-MM-dd")}>
            {props.formatedSelectedDate}
          </time>
        </h2>
        <div className='p-4 grid grid-cols-2 md:grid-cols-1 gap-4 justify-items-center text-sm '>
          {props.machinesStructure.map((slot, index) => (
            <div key={index}>
              <Slot
                listOfReservations={props.listOfReservations}
                selectedDay={props.selectedDay}
                handleAddReservation={props.handleAddReservation}
                slot={slot}
                formatedSelectedDate={props.formatedSelectedDate}
              ></Slot>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slots;
