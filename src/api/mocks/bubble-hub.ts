import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  API_CALL_STATUS_NOT_FOUND,
  API_CALL_STATUS_NO_CONTENT,
  API_CALL_STATUS_OK,
} from "../../utils";
import {
  curentUserId,
  selectedWashingDays,
  timeSlotsWithMachines,
} from "../../mock";
import { v1 } from "uuid";

const uuidRegexp =
  "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";

export const bubbleHub = (client: AxiosInstance): MockAdapter => {
  const mock = new MockAdapter(client, {});

  mock
    .onGet(new RegExp(`/reservations`))
    .reply(() => [API_CALL_STATUS_OK, selectedWashingDays])
    .onPost(new RegExp(`/`))
    .reply((config) => {
      const data = JSON.parse(config.data);
      const newReservationId = v1();

      selectedWashingDays.push({
        userId: curentUserId,
        id: newReservationId,
        machineId: data.machineId,
        timeSlotId: data.timeSlotId,
        name: data.name,
        date: data.date,
        startDatetime: data.startDatetime,
        endDatetime: data.endDatetime,
      });
      return [API_CALL_STATUS_OK, { newReservationId }];
    })
    .onDelete(new RegExp(`/reservations/${uuidRegexp}`))
    .reply((config) => {
      const match = config.url?.match(`${uuidRegexp}`);
      const idToDelete = (match && match[0]) || "";

      const initialLength = selectedWashingDays.length;
      const updatedSelectedWashingDays = selectedWashingDays.filter(
        (item) => item.id !== idToDelete
      );
      selectedWashingDays.length = 0;
      selectedWashingDays.push(...updatedSelectedWashingDays);

      if (selectedWashingDays.length < initialLength) {
        return [API_CALL_STATUS_NO_CONTENT];
      }
      return [API_CALL_STATUS_NOT_FOUND, { error: "Item not found" }];
    })
    .onGet(new RegExp(`/timeslots`))
    .reply(() => [API_CALL_STATUS_OK, timeSlotsWithMachines]);
  // TODO: need to fix
  // .onPut(/timeslots\/\d+/)
  // .reply((config) => {
  //   const match = config.url?.match(new RegExp(`/timeslots/(\\d+)`));
  //   const id = (match && match[1]) || "";
  //   const data = JSON.parse(config.data);
  //   console.log("data", data);
  //   const updatedItem = timeSlotsWithMachines.find(
  //     (item: TimeSlot) => item.timeSlotId === Number(id)
  //   );
  //   if (updatedItem) {
  //     const machineToUpdate = updatedItem.machines.find(
  //       (machine: Machine) => machine.machineId === data.machineId
  //     );
  //     if (machineToUpdate) {
  //       machineToUpdate.selectedBy = data.userId;
  //     }
  //   }
  //   console.log("updatedItem", updatedItem);

  //   return [API_CALL_STATUS_NO_CONTENT];
  // });

  return mock;
};

export default bubbleHub;
