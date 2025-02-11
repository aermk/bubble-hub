import { Instance, flow, types } from "mobx-state-tree";
import { TimeSlot } from "./TimeSlot";
import mockApi from "../api/mockApiClient";
import { loadingStates } from "./enums";

export const DataStore = types
  .model("DataStore", {
    timeSlots: types.optional(types.array(TimeSlot), []),
    loadingState: types.optional(
      types.enumeration("loadingStates", Object.keys(loadingStates)),
      loadingStates.Initial
    ),
  })
  .actions((self) => ({
    fetchTimeSlots: flow(function* fetchTimeSlots() {
      self.loadingState = loadingStates.Pending;
      try {
        const resp = yield mockApi.get("/timeslots");
        self.timeSlots = resp.data;
        console.log(resp, "fetchTimeSlots resp");
        self.loadingState = loadingStates.Done;
      } catch (e) {
        self.loadingState = loadingStates.Error;
        throw e;
      }
    }),
    updateTimeSlots: flow(function* updateTimeSlots(
      timeSlotId: number,
      machineId: number,
      userId: string,
      date: string
    ) {
      try {
        const data = {
          timeSlotId: timeSlotId,
          machineId: machineId,
          userId: userId,
          date: date,
        };

        const resp = yield mockApi.put(`/timeslots/${timeSlotId}`, data);
        console.log(resp, "updateTimeSlots resp");
      } catch (e) {
        console.error(e, "error");
        throw e;
      }
    }),
  }));

export interface IDataStore extends Instance<typeof DataStore> {}
