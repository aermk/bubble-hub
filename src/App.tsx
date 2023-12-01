import { useState } from "react";
import "./App.css";
import Header from "./Header";
import MyReservations from "./Navigation/MyReservationsTab/MyReservation";
import Calendar from "./Navigation/CalendarTab/Calendar";
import {
  Reservation,
  TimeSlot,
  selectedWashingDays,
  timeSlotsWithMachines,
} from "./mock";
import { format, startOfToday } from "date-fns";
import Slots from "./Navigation/CalendarTab/Slots";

const App = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const formatedSelectedDate = format(selectedDay, "MMM d, EEEE");
  const [listOfReservations, setList] =
    useState<Reservation[]>(selectedWashingDays);
  const [machinesStructure, setMachinesStructure] = useState<TimeSlot[]>(
    timeSlotsWithMachines
  );

  const getSelectedDay = (today: Date) => {
    const machineStructureWithDates = machinesStructure.map((slot) => ({
      ...slot,
      date: format(today, "yyyy-MM-dd"),
    }));
    setMachinesStructure(machineStructureWithDates);
  };

  const handleRemoveReservation = (id: string) => {
    const updatedList = listOfReservations.filter(
      (reservation: Reservation) => reservation.id !== id // TODO fix type
    );
    setList(updatedList);
  };

  const handleAddReservation = (newReservation: Reservation) => {
    setList([...listOfReservations, newReservation]);
  };
  console.log(machinesStructure, "machinesStructure");

  return (
    <div className='container'>
      <Header />
      <section className='flex flex-row justify-items-stretch bg-white p-6 rounded-lg shadow m-8 2xl:flex-col'>
        <Calendar
          getSelectedDay={getSelectedDay}
          listOfReservations={listOfReservations}
          handleAddReservation={handleAddReservation}
          today={today}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          formatedSelectedDate={formatedSelectedDate}
        />
        <Slots
          listOfReservations={listOfReservations}
          handleAddReservation={handleAddReservation}
          formatedSelectedDate={formatedSelectedDate}
          selectedDay={selectedDay}
          machinesStructure={machinesStructure}
        />
        <MyReservations
          listOfReservations={listOfReservations}
          handleRemoveReservation={handleRemoveReservation}
        />
      </section>
    </div>
  );
};

export default App;
