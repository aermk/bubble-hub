import { useState, FC } from "react";
import ModalWindow from "./ModalWindow";
import { classNames } from "../utils";
import { Reservation, TimeSlot } from "../mock";
import { observer } from "mobx-react";

type SlotPropsType = {
  slot: TimeSlot;
  formatedSelectedDate?: string;
  selectedDay: Date;
  listOfReservations: Reservation[];
};

export const Slot: FC<SlotPropsType> = observer((props) => {
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
  function isSlotAvailable(slot: TimeSlot): boolean {
    return slot.machines.some((m) => m.selectedBy === "");
  }
  const slotIsAvailable = isSlotAvailable(props.slot);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onTimeSlotClick();
        }}
        className={classNames(
          isSlotReservedByUser
            ? "slot-btn bg-green-500 hover:bg-green-700"
            : "slot-btn btn-blue",
          slotIsAvailable
            ? "slot-btn btn-blue"
            : "slot-btn btn-blue btn-not-allowed"
        )}
      >
        {`${props.slot.startTime} - ${props.slot.endTime}`}
      </button>
      {slotIsAvailable && showModal && (
        <ModalWindow
          slot={props.slot}
          formatedSelectedDate={props.formatedSelectedDate}
          onClose={handleCloseModal}
          listOfReservations={props.listOfReservations}
        />
      )}
    </>
  );
});

export default Slot;
