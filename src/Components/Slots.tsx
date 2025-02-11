import { FC } from "react";
import { Slot } from "./Slot";
import { Reservation, TimeSlot } from "../mock";
import { format } from "date-fns";

type SlotsPropsType = {
  timeSlots: TimeSlot[];
  formatedSelectedDate?: string;
  selectedDay: Date;
  listOfReservations: Reservation[];
};

export const Slots: FC<SlotsPropsType> = (props) => {
  return (
    <div className="flex-1 p-4">
      <h1 className="mb-4 font-semibold text-xl">
        2. Choose available time slot:
      </h1>
      <div className="flex flex-col">
        <h2 className="font-semibold text-gray-900 mb-4">
          Schedule for{" "}
          <time dateTime={format(props.selectedDay, "yyyy-MM-d")}>
            {props.formatedSelectedDate}
          </time>
        </h2>
        <div className="p-4 grid grid-cols-2 md:grid-cols-1 gap-4 justify-items-center text-sm ">
          {props.timeSlots.map((slot, index) => (
            <div key={index}>
              <Slot
                listOfReservations={props.listOfReservations}
                selectedDay={props.selectedDay}
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
