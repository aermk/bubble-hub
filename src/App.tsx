import { useEffect, useState } from "react";
import Header from "./Header";
import MyReservations from "./Components/MyReservation";
import Calendar from "./Components/Calendar";
import { TimeSlot, timeSlotsWithMachines } from "./mock";
import { format, startOfToday } from "date-fns";
import Slots from "./Components/Slots";
import { IRootStore } from "./store/rootStore";
import { useMST } from "./store/useMST";
import { observer } from "mobx-react";
import { loadingStates } from "./store/enums";

const App = observer(() => {
  const store = useMST<IRootStore>();
  const { reservationsStore, dataStore } = store;
  const { fetchTimeSlots, loadingState } = dataStore;
  const { reservations, fetchReservations } = reservationsStore;

  useEffect(() => {
    fetchReservations();
    fetchTimeSlots();
  }, []);

  const [updatedTimeslots, setUpdatedTimeSlots] = useState<TimeSlot[]>(
    timeSlotsWithMachines
  );

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const formatedSelectedDate = format(selectedDay, "MMM dd, EEEE");

  const getSelectedDay = (today: Date) => {
    // TODO: move to store?
    const machineStructureWithDates = updatedTimeslots.map((slot) => ({
      ...slot,
      date: format(today, "yyyy-MM-dd"),
    }));
    setUpdatedTimeSlots(machineStructureWithDates);
  };

  return (
    <div className="container">
      <Header />
      <section className="flex flex-row justify-items-stretch bg-white p-6 rounded-lg shadow m-8 2xl:flex-col">
        <Calendar
          getSelectedDay={getSelectedDay}
          listOfReservations={reservations}
          today={today}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        {loadingState === loadingStates.Done && (
          <Slots
            listOfReservations={reservations}
            formatedSelectedDate={formatedSelectedDate}
            selectedDay={selectedDay}
            timeSlots={updatedTimeslots}
          />
        )}
        <MyReservations listOfReservations={reservations} />
      </section>
    </div>
  );
});

export default App;
