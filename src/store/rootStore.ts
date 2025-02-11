import { Instance, types } from "mobx-state-tree";

import { ReservationsStore } from "./ReservationsStore";
import { DataStore } from "./DataStore";

const storeName = "RootStore";

export const RootStore = types.model(storeName, {
  reservationsStore: types.optional(ReservationsStore, {}),
  dataStore: types.optional(DataStore, {}),
});

export interface IRootStore extends Instance<typeof RootStore> {}

export const createRootStore = () => {
  return RootStore.create({
    reservationsStore: { reservations: [] },
    dataStore: { timeSlots: [] },
  });
};
