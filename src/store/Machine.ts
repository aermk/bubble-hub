import { Instance, types } from "mobx-state-tree";

export const Machine = types.model("Machine", {
  machineId: types.number,
  name: types.string,
  selectedBy: types.string,
});

export interface IMachine extends Instance<typeof Machine> {}
