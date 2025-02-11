import { Instance, flow, types } from "mobx-state-tree";
import { Reservation } from "./Reservation";
import mockApi from "../api/mockApiClient";

export const ReservationsStore = types
  .model("ReservationsStore", {
    reservations: types.optional(types.array(Reservation), []),
  })
  .views((self) => ({
    get reservationsCount(): number {
      return self.reservations.length;
    },
  }))
  .actions((self) => ({
    fetchReservations: flow(function* fetchReservations() {
      try {
        const resp = yield mockApi.get("/reservations");
        self.reservations = resp.data;
      } catch (e) {
        console.error(e, "error fetchReservations");
        throw e;
      }
    }),
    addReservation: flow(function* addReservation(newReservation) {
      try {
        const data = {
          userId: newReservation.userId,
          id: newReservation.id,
          machineId: newReservation.machineId,
          timeSlotId: newReservation.timeSlotId,
          name: newReservation.name,
          date: newReservation.date,
          startDatetime: newReservation.startDatetime,
          endDatetime: newReservation.endDatetime,
        };

        const resp = yield mockApi.post("/", data);
        console.log(resp, "addReservation resp");
      } catch (e) {
        console.error(e, "error");
        throw e;
      }
    }),
    removeReservation: flow(function* removeReservation(id) {
      try {
        const resp = yield mockApi.delete(`/reservations/${id}`);
        console.log(resp, "removeReservation resp");
      } catch (e) {
        console.error(e, "error");
        throw e;
      }
    }),
  }));

export interface IReservationsStore
  extends Instance<typeof ReservationsStore> {}
