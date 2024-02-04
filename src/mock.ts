import { format } from "date-fns";

export type Machine = {
  machineId: number;
  name: string;
  wasSelectedByOther: boolean;
};

export type TimeSlot = {
  timeSlotId: number;
  startTime: string;
  endTime: string;
  date: string;
  machines: Machine[];
  available: boolean;
};

export type Reservation = {
  //add userId
  id: string;
  timeSlotId: number;
  startDatetime: string;
  endDatetime: string;
  machineId: number;
  name: string;
  date: string;
};

export const selectedWashingDays: Reservation[] = [];

// available: false means all machines were reserved by other users,
// and time is not available
export const timeSlotsWithMachines: TimeSlot[] = [
  {
    timeSlotId: 910,
    startTime: "9:00",
    endTime: "10:00",
    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 9101,
        name: "M1",
        wasSelectedByOther: false,
      },
      {
        machineId: 9102,
        name: "M2",
        wasSelectedByOther: false,
      },
      {
        machineId: 9103,
        name: "M3",
        wasSelectedByOther: true,
      },
      {
        machineId: 9104,
        name: "M4",
        wasSelectedByOther: true,
      },
      {
        machineId: 9105,
        name: "M5",
        wasSelectedByOther: false,
      },
      {
        machineId: 9106,
        name: "M6",
        wasSelectedByOther: true,
      },
      {
        machineId: 9107,
        name: "M7",
        wasSelectedByOther: false,
      },
      {
        machineId: 9108,
        name: "M8",
        wasSelectedByOther: false,
      },
    ],
    available: true,
  },
  {
    timeSlotId: 1011,
    startTime: "10:00",
    endTime: "11:00",
    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 10111,
        name: "M1",
        wasSelectedByOther: true,
      },
      {
        machineId: 10112,
        name: "M2",
        wasSelectedByOther: false,
      },
      {
        machineId: 10113,
        name: "M3",
        wasSelectedByOther: false,
      },
      {
        machineId: 10114,
        name: "M4",
        wasSelectedByOther: true,
      },
      {
        machineId: 10115,
        name: "M5",
        wasSelectedByOther: false,
      },
      {
        machineId: 10116,
        name: "M6",
        wasSelectedByOther: false,
      },
      {
        machineId: 10117,
        name: "M7",
        wasSelectedByOther: false,
      },
      {
        machineId: 10118,
        name: "M8",
        wasSelectedByOther: true,
      },
    ],
    available: true,
  },
  {
    timeSlotId: 1112,
    startTime: "11:00",
    endTime: "12:00",
    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 11121,
        name: "M1",
        wasSelectedByOther: true,
      },
      {
        machineId: 11122,
        name: "M2",
        wasSelectedByOther: true,
      },
      {
        machineId: 11123,
        name: "M3",
        wasSelectedByOther: true,
      },
      {
        machineId: 11124,
        name: "M4",
        wasSelectedByOther: true,
      },
      {
        machineId: 11125,
        name: "M5",
        wasSelectedByOther: true,
      },
      {
        machineId: 11126,
        name: "M6",
        wasSelectedByOther: true,
      },
      {
        machineId: 11127,
        name: "M7",
        wasSelectedByOther: true,
      },
      {
        machineId: 11128,
        name: "M8",
        wasSelectedByOther: true,
      },
    ],
    available: false,
  },
  {
    timeSlotId: 1213,
    startTime: "12:00",
    endTime: "13:00",
    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 12131,
        name: "M1",
        wasSelectedByOther: true,
      },
      {
        machineId: 12132,
        name: "M2",
        wasSelectedByOther: true,
      },
      {
        machineId: 12133,
        name: "M3",
        wasSelectedByOther: true,
      },
      {
        machineId: 12134,
        name: "M4",
        wasSelectedByOther: true,
      },
      {
        machineId: 12135,
        name: "M5",
        wasSelectedByOther: true,
      },
      {
        machineId: 12136,
        name: "M6",
        wasSelectedByOther: true,
      },
      {
        machineId: 12137,
        name: "M7",
        wasSelectedByOther: true,
      },
      {
        machineId: 12138,
        name: "M8",
        wasSelectedByOther: true,
      },
    ],
    available: false,
  },
  {
    timeSlotId: 1314,
    startTime: "13:00",
    endTime: "14:00",
    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 13141,
        name: "M1",
        wasSelectedByOther: true,
      },
      {
        machineId: 13142,
        name: "M2",
        wasSelectedByOther: true,
      },
      {
        machineId: 13143,
        name: "M3",
        wasSelectedByOther: true,
      },
      {
        machineId: 13144,
        name: "M4",
        wasSelectedByOther: true,
      },
      {
        machineId: 13145,
        name: "M5",
        wasSelectedByOther: false,
      },
      {
        machineId: 13146,
        name: "M6",
        wasSelectedByOther: true,
      },
      {
        machineId: 13147,
        name: "M7",
        wasSelectedByOther: false,
      },
      {
        machineId: 13148,
        name: "M8",
        wasSelectedByOther: true,
      },
    ],
    available: true,
  },
  {
    timeSlotId: 1415,
    startTime: "14:00",
    endTime: "15:00",
    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 14151,
        name: "M1",
        wasSelectedByOther: true,
      },
      {
        machineId: 14152,
        name: "M2",
        wasSelectedByOther: true,
      },
      {
        machineId: 14153,
        name: "M3",
        wasSelectedByOther: true,
      },
      {
        machineId: 14154,
        name: "M4",
        wasSelectedByOther: true,
      },
      {
        machineId: 14155,
        name: "M5",
        wasSelectedByOther: false,
      },
      {
        machineId: 14156,
        name: "M6",
        wasSelectedByOther: false,
      },
      {
        machineId: 14157,
        name: "M7",
        wasSelectedByOther: false,
      },
      {
        machineId: 14158,
        name: "M8",
        wasSelectedByOther: true,
      },
    ],
    available: true,
  },
  {
    timeSlotId: 1516,
    startTime: "15:00",
    endTime: "16:00",
    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 15161,
        name: "M1",
        wasSelectedByOther: true,
      },
      {
        machineId: 15162,
        name: "M2",
        wasSelectedByOther: true,
      },
      {
        machineId: 15163,
        name: "M3",
        wasSelectedByOther: true,
      },
      {
        machineId: 15164,
        name: "M4",

        wasSelectedByOther: true,
      },
      {
        machineId: 15165,
        name: "M5",
        wasSelectedByOther: false,
      },
      {
        machineId: 15166,
        name: "M6",
        wasSelectedByOther: true,
      },
      {
        machineId: 15167,
        name: "M7",
        wasSelectedByOther: false,
      },
      {
        machineId: 15168,
        name: "M8",
        wasSelectedByOther: true,
      },
    ],
    available: true,
  },
  {
    timeSlotId: 1617,
    startTime: "16:00",
    endTime: "17:00",

    date: format(new Date(), "yyyy-MM-dd"),
    machines: [
      {
        machineId: 16171,
        name: "M1",
        wasSelectedByOther: true,
      },
      {
        machineId: 16172,
        name: "M2",
        wasSelectedByOther: true,
      },
      {
        machineId: 16173,
        name: "M3",
        wasSelectedByOther: true,
      },
      {
        machineId: 16174,
        name: "M4",
        wasSelectedByOther: true,
      },
      {
        machineId: 16175,
        name: "M5",
        wasSelectedByOther: false,
      },
      {
        machineId: 16176,
        name: "M6",
        wasSelectedByOther: true,
      },
      {
        machineId: 16177,
        name: "M7",
        wasSelectedByOther: false,
      },
      {
        machineId: 16178,
        name: "M8",
        wasSelectedByOther: true,
      },
    ],
    available: true,
  },
];
