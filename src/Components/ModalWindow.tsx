import { useState, FC } from "react";
import MachineSelector from "./MachineSelector";
import { v1 } from "uuid";
import { classNames } from "../utils";
import { Reservation, TimeSlot, curentUserId } from "../mock";
import { useMST } from "../store/useMST";
import { IRootStore } from "../store/rootStore";

type ModalWindowPropsType = {
  slot: TimeSlot;
  onClose: () => void;
  formatedSelectedDate?: string;
  listOfReservations: Reservation[];
};

export const ModalWindow: FC<ModalWindowPropsType> = (props) => {
  const [choosenMachineId, setChoosenMachineId] = useState<number>(0);
  const [choosenMachineName, setChoosenMachineName] = useState<string>("");

  const store = useMST<IRootStore>();
  const { reservationsStore, dataStore } = store;
  const { addReservation, fetchReservations, reservationsCount } =
    reservationsStore;

  const { fetchTimeSlots, updateTimeSlots } = dataStore;

  const isButtonDisabled = reservationsCount >= 8 || !choosenMachineName;

  const handleOptionChange = (machineId: number, machineName: string) => {
    setChoosenMachineId(machineId);
    setChoosenMachineName(machineName);
  };

  const handleConfirm = () => {
    addReservation({
      userId: curentUserId,
      id: v1(),
      timeSlotId: props.slot.timeSlotId,
      startDatetime: props.slot.startTime,
      endDatetime: props.slot.endTime,
      machineId: choosenMachineId,
      name: choosenMachineName,
      date: props.slot.date,
    })
      .then(() => {
        fetchReservations();
        updateTimeSlots(
          props.slot.timeSlotId,
          choosenMachineId,
          curentUserId,
          props.slot.date
        );
        fetchTimeSlots();
        console.log("fetch");
      })
      .catch((e) => {
        console.error(e);
      });
    props.onClose();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="flex flex-col items-center bg-white p-4 rounded shadow-lg">
        <h2 className="font-bold text-xl text-gray-900">
          Choose available washing machine:
        </h2>
        <div className="my-4 p-4">
          <MachineSelector
            listOfReservations={props.listOfReservations}
            machines={props.slot.machines}
            slot={props.slot}
            handleOptionChange={handleOptionChange}
          />
        </div>
        <p className="text-xl mb-4 p-2 font-bold">
          {props.formatedSelectedDate},{" "}
          {`${props.slot.startTime} - ${props.slot.endTime}`}{" "}
          {choosenMachineName}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className={classNames(
              "btn-blue confirm-btn",
              isButtonDisabled && "btn-blue confirm-btn btn-not-allowed"
            )}
            disabled={isButtonDisabled}
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="close-window-btn confirm-btn"
            onClick={props.onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
