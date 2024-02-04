import { useState } from "react";
import Header from "./Header";
import MyReservations from "./Navigation/MyReservationsTab/MyReservation";
import Calendar from "./Navigation/CalendarTab/Calendar";
import { TimeSlot, timeSlotsWithMachines } from "./mock";
import { format, startOfToday } from "date-fns";
import Slots from "./Navigation/CalendarTab/Slots";
import { IRootStore } from "./store/rootStore";
import { useMST } from "./store/useMST";
import { observer } from "mobx-react";

const App = observer(() => {
  const store = useMST<IRootStore>();
  const { reservationsStore } = store;
  const { reservations } = reservationsStore;

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const formatedSelectedDate = format(selectedDay, "MMM dd, EEEE");
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

  console.log(machinesStructure, "machinesStructure");

  return (
    <div className='container'>
      <Header />
      <section className='flex flex-row justify-items-stretch bg-white p-6 rounded-lg shadow m-8 2xl:flex-col'>
        <Calendar
          getSelectedDay={getSelectedDay}
          listOfReservations={reservations}
          today={today}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          formatedSelectedDate={formatedSelectedDate}
        />
        <Slots
          listOfReservations={reservations}
          formatedSelectedDate={formatedSelectedDate}
          selectedDay={selectedDay}
          machinesStructure={machinesStructure}
        />
        <MyReservations listOfReservations={reservations} />
      </section>
    </div>
  );
});

export default App;
