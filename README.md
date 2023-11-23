# BubbleHub: laundry booking UI

## About app

This is an application for booking washing machines. The application assumes that the user logs in using personal credentials.

### How it works

The user can:

- select a day,
- select a time slot on the selected day,
- select a washing machine,
- сonfirm a reservation,
- delete a reservation.

If the washing machine is not available, it means it has been selected by other users.
If a time slot is unavailable, it means all washing machines in that time slot have been booked by other users.

- The day the user has a reservation is marked with a green mark.
- The user-booked time slot and washing machine are highlighted in green.

### Booking Rules

- The user are limited to a maximum of 8 reservations.
- The user can select only one washing machine in the modal window.
- The user cannot confirm the reservation without selecting a washing machine.

## Built With

- React + Vite
- TypeScript
- Tailwind CSS

## Demo link

https://aermk.github.io/bubble-hub/
