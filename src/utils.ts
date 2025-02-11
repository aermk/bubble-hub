export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const colStartClasses = [
  "",
  // "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export const API_CALL_STATUS_OK = 200;
export const API_CALL_STATUS_CREATED = 201;
export const API_CALL_STATUS_NO_CONTENT = 204;
export const API_CALL_STATUS_ACCESS_DENIED = 403;
export const API_CALL_STATUS_NOT_FOUND = 404;
