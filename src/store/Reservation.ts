import { Instance, types } from "mobx-state-tree";

export const Reservation = types.model("Reservation", {
  id: types.string,
  timeSlotId: types.number,
  startDatetime: types.string,
  endDatetime: types.string,
  machineId: types.number,
  name: types.string,
  date: types.string,
});

export interface IReservation extends Instance<typeof Reservation> {}
