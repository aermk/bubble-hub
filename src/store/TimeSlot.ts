import { Instance, types } from "mobx-state-tree";
import { Machine } from "./Machine";

export const TimeSlot = types.model("TimeSlot", {
  timeSlotId: types.number,
  startTime: types.string,
  endTime: types.string,
  machines: types.optional(types.array(Machine), []),
});

export interface ITimeSlot extends Instance<typeof TimeSlot> {}
