import React from "react";
import { classNames } from "../../utils";
import { Machine, Reservation, TimeSlot } from "../../mock";

type PropsType = {
  machines: Machine[];
  slot: TimeSlot;
  handleOptionChange: (machineId: number, name: string) => void;
  listOfReservations: any;
};

export const MachineSelector = (props: PropsType) => {
  return (
    <div className='grid grid-cols-4 gap-6 text-sm'>
      {props.machines.map((machine, index) => {
        const isMachineSelected = props.listOfReservations.some(
          (reservation: Reservation) =>
            reservation.date === props.slot.date &&
            reservation.timeSlotId === props.slot.timeSlotId &&
            reservation.machineId === machine.machineId
        );

        return (
          <div
            key={index}
            className={classNames(
              isMachineSelected
                ? "machine-btn bg-green-500 btn-not-allowed hover:bg-green-700"
                : machine.wasSelectedByOther
                ? "machine-btn btn-blue btn-not-allowed"
                : "machine-btn btn-blue",
              "flex items-center justify-center"
            )}
          >
            <input
              className='w-5 h-5'
              type='radio'
              disabled={machine.wasSelectedByOther || isMachineSelected}
              name={props.slot.timeSlotId.toString()}
              onChange={(e) => {
                props.handleOptionChange(machine.machineId, machine.name);
              }}
            />
            <label className='ml-2'>{machine.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default MachineSelector;
