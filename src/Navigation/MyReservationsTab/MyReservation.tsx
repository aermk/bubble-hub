import { FC } from "react";
import { Reservation } from "../../mock";
import { format } from "date-fns";
import { useMST } from "../../store/useMST";
import { IRootStore } from "../../store/rootStore";
import { observer } from "mobx-react";

type MyReservationsPropsType = {
  listOfReservations: Reservation[];
};

export const MyReservations: FC<MyReservationsPropsType> = observer((props) => {
  const store = useMST<IRootStore>();

  const { reservationsStore } = store;
  const { fetchReservations, reservationsCount, removeReservation } =
    reservationsStore;

  const handleRemove = (id: string) => {
    removeReservation(id)
      .then(() => {
        fetchReservations();
        console.log("there was a fetch");
      })
      .catch((e) => {
        console.error(e + "ошибочка вышла");
      });
  };

  return (
    <div className='flex-1 p-4'>
      <h1 className='mb-4 font-semibold text-xl'>
        3. Check your reservations:
      </h1>
      <div className='flex flex-col'>
        {props.listOfReservations.length ? (
          <ul>
            {props.listOfReservations.map((reserv, index) => (
              <li
                key={index}
                className='flex items-center justify-between mb-1 bg-neutral-50 p-1 rounded-md'
              >
                {format(new Date(reserv.date), "MMM dd, EEEE")},{" "}
                {reserv.startDatetime}
                {" - "}
                {reserv.endDatetime},{"  "}
                {reserv.name}
                <button
                  className='cancel-reservation-btn'
                  onClick={() => handleRemove(reserv.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-900'>
            Reservation list is empty. You can have{" "}
            <b>8 reservations in total</b>.
          </p>
        )}
        {reservationsCount >= 8 && (
          <p className='text-gray-900'>
            <b>You can't add more!</b>
          </p>
        )}
      </div>
    </div>
  );
});

export default MyReservations;
