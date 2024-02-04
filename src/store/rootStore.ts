import { Instance, types } from "mobx-state-tree";

import { ReservationsStore } from "./ReservationsStore";

const storeName = "RootStore";

export const RootStore = types.model(storeName, {
  reservationsStore: types.optional(ReservationsStore, {}),
});

export interface IRootStore extends Instance<typeof RootStore> {}

export const createRootStore = () => {
  return RootStore.create({
    reservationsStore: { reservations: [] },
  });
};
