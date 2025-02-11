import { format } from "date-fns";

export type Machine = {
  machineId: number;
  name: string;
  selectedBy: string;
};

export type TimeSlot = {
  timeSlotId: number;
  startTime: string;
  endTime: string;
  date: string;
  machines: Machine[];
};

export type Reservation = {
  userId: string;
  id: string;
  timeSlotId: number;
  startDatetime: string;
  endDatetime: string;
  machineId: number;
  name: string;
  date: string;
};

export const curentUserId = "currentUser-123";

export const selectedWashingDays: Reservation[] = [];

const MACHINES_COUNT = 8;
const START_HOUR = 9;
const END_HOUR = 17;

const generateTimeSlotsForDay = (date: Date) => {
  const slots = [];

  for (let hour = START_HOUR; hour < END_HOUR; hour += 1) {
    const timeSlotId = Number(`${hour}${hour + 1}`);

    const startTime = `${hour}:00`;
    const endTime = `${hour + 1}:00`;

    const machines = Array.from({ length: MACHINES_COUNT }, (_, i) => {
      return {
        machineId: Number(`${hour}${hour + 1}${i + 1}`),
        name: `M${i + 1}`,
        selectedBy: "",
      };
    });

    slots.push({
      timeSlotId,
      startTime,
      endTime,
      date: format(date, "yyyy-MM-dd"),
      machines,
    });
  }

  return slots;
};

const markRandomMachinesAsReserved = (timeSlots: TimeSlot[], chance = 0.2) => {
  return timeSlots.map((slot) => {
    const newMachines = slot.machines.map((m) => {
      if (Math.random() < chance) {
        return { ...m, selectedBy: "otherUser" };
      }
      return m;
    });
    return { ...slot, machines: newMachines };
  });
};

const baseSlots = generateTimeSlotsForDay(new Date());
export const timeSlotsWithMachines = markRandomMachinesAsReserved(
  baseSlots,
  0.8
);

console.log(baseSlots);
console.log(timeSlotsWithMachines);
