import { useState, FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  isBefore,
} from "date-fns";
import { classNames } from "../../utils";
import { colStartClasses } from "../../utils";
import { Reservation } from "../../mock";
import { observer } from "mobx-react";

type CalendarPropsType = {
  listOfReservations: Reservation[];
  getSelectedDay: (day: Date) => void;
  today: Date;
  setSelectedDay: (selectedDay: Date) => void;
  selectedDay: Date;
  formatedSelectedDate: string;
};

export const Calendar: FC<CalendarPropsType> = observer((props) => {
  const [currentMonth, setCurrentMonth] = useState(
    format(props.today, "MMM-yyyy")
  );
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const previousMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const isFirstMonth = currentMonth === format(props.today, "MMM-yyyy");

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  return (
    <div className='p-4 flex-1'>
      <h1 className='mb-4 font-semibold text-xl'>1. Choose the day: </h1>
      <div className='flex items-center mb-4'>
        <h2 className='flex-auto font-semibold text-gray-900'>
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          type='button'
          onClick={() => {
            if (!isFirstMonth) {
              previousMonth();
            }
          }}
          className={classNames(
            isFirstMonth && "btn-not-allowed",
            "-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          )}
        >
          <span className='sr-only'>Previous month</span>
          <ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
        </button>
        <button
          onClick={nextMonth}
          type='button'
          className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Next month</span>
          <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
        </button>
      </div>
      <div className='grid grid-cols-7 text-xs leading-6 text-center text-gray-500'>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>St</div>
        <div>Sn</div>
      </div>
      <div className='grid grid-cols-7 mt-2 text-sm'>
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "py-1.5"
            )}
          >
            <button
              type='button'
              onClick={() => {
                props.setSelectedDay(day);
                props.getSelectedDay(day);
              }}
              disabled={isBefore(day, props.today)}
              className={classNames(
                isEqual(day, props.selectedDay) && "text-white",
                !isEqual(day, props.selectedDay) &&
                  isToday(day) &&
                  "text-red-500",
                !isEqual(day, props.selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-900",
                !isEqual(day, props.selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, props.selectedDay) &&
                  isToday(day) &&
                  "bg-blue-500",
                isEqual(day, props.selectedDay) &&
                  !isToday(day) &&
                  "bg-gray-900",
                !isEqual(day, props.selectedDay) && "hover:bg-gray-200",
                (isEqual(day, props.selectedDay) || isToday(day)) &&
                  "font-semibold",
                isBefore(day, props.today) && "btn-not-allowed",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
            <div className='w-1 h-1 mx-auto mt-1'>
              {props.listOfReservations.some((selectedDay) =>
                isSameDay(parseISO(selectedDay.date), day)
              ) && <div className='w-1 h-1 rounded-full bg-green-500'></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Calendar;
