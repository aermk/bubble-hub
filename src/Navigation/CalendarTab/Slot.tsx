import React, { useState } from "react";
import { format } from "date-fns";
import ModalWindow from "./ModalWindow";
import { classNames } from "../../utils";
import { Reservation, TimeSlot } from "../../mock";

type SlotPropsType = {
  slot: TimeSlot;
  formatedSelectedDate?: string;
  handleAddReservation: (reservation: Reservation) => void;
  selectedDay: Date;
  listOfReservations: Reservation[];
  machinesStructure: TimeSlot[];
};

export const Slot = (props: SlotPropsType) => {
  const [showModal, setShowModal] = useState(false);

  const onTimeSlotClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const isSlotReservedByUser = props.listOfReservations.some(
    (reservation: Reservation) =>
      reservation.date === props.slot.date &&
      reservation.timeSlotId === props.slot.timeSlotId
  );

  return (
    <>
      <button
        type='button'
        onClick={() => {
          onTimeSlotClick();
        }}
        className={classNames(
          isSlotReservedByUser
            ? "slot-btn bg-green-500 hover:bg-green-700"
            : "slot-btn btn-blue",
          props.slot.available
            ? "slot-btn btn-blue"
            : "slot-btn btn-blue btn-not-allowed"
        )}
      >
        {`${props.slot.startTime} - ${props.slot.endTime}`}
      </button>
      {props.slot.available && showModal && (
        <ModalWindow
          slot={props.slot}
          handleAddReservation={props.handleAddReservation}
          formatedSelectedDate={props.formatedSelectedDate}
          onClose={handleCloseModal}
          machinesStructure={props.machinesStructure}
          listOfReservations={props.listOfReservations}
        />
      )}
    </>
  );
};

export default Slot;
