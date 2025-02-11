import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { API_CALL_STATUS_OK } from "../../utils";
import { timeSlotsWithMachines } from "../../mock";

export const timeSlots = (client: AxiosInstance): MockAdapter => {
  const mock = new MockAdapter(client, {});

  mock
    .onGet(new RegExp(`/timeslots`))
    .reply(() => [API_CALL_STATUS_OK, timeSlotsWithMachines]);

  return mock;
};

export default timeSlots;
