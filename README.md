# Movie-Ticket-Booking-WebApp

## Bugs

- [x] Seat Booking Matrix is on the Left
- [x] Home Button is not redirecting to the Home page
- [x] Role-Based Access Control
- [x] Booked Seats Being Considered for Booking
- [X] Previous Date Selection in Booking System
- [ ] Email Not Comming
- [ ] OTP Not Comming
- [ ] Admin not able to see its booking
- [ ] When a new user logged in, The home page still shows the details of the previous User until we refresh the page. Probably this is a rerendering Issue.

## Bug 1: Moving the Seat Booking Matrix to the Middle.

![Seat Booking Matrix in the Middle](./assets/seatBookingMatrix.png)

## Bug 2: Added Hyperlinks to Home & BookMyShow Component

![Added Hyperlinks to Home & BookMyShow Component](./assets/HyperLinks.gif)

## Bug 3: Role-Based Access Control

### Problem:

Previously, users were able to access the `/admin` and `/partner` panels regardless of their roles. Similarly, partners could access the `/admin` panel, leading to unauthorized access to restricted areas of the application.

### Expected Behavior

Users should only be able to access panels that correspond to their roles:

- Admins should have access to the `/admin` panel.
- Partners should have access to the `/partner` panel.
- Unauthorized users should not have access to any restricted panels and should be redirected appropriately.

### Solution:

Implemented a role-based access control system to ensure that users can only access panels for which they have the appropriate roles. Unauthorized users attempting to access restricted panels will be redirected to the Unauthorized page (`/unauthorised`).

#### Unauthorized Page

![Unauthorized Page](./assets/unauthorised.png)

## Bug 4: Booked Seats Being Considered for Booking

### Issue Description

When a user clicks on a seat that has already been booked, the "Pay Now" button appears, and the amount of the booked seat is included in the total price and selected seats. This should not happen, as booked seats should not be available for selection.
![DisableButton](./assets/DisableButton.png)

### Expected Behavior

Users should only be able to book unbooked seats. Once a payment is successful, the booking details should be updated in the database, and the user should be redirected to the "/profile" page.

### Solution

To prevent booked seats from being selected and included in the total price, the `onClick` handler for seat selection was updated. This ensures that booked seats cannot be selected or deselected by users.

## BookShow UI Enhancement using Tooltip ( from antd )

This update enhances the `BookShow.js` component by integrating tooltips that indicate the booking status of each seat. The tooltips provide immediate feedback to users when they hover over a seat, informing them if the seat is already booked or available for booking.

- Each seat button is now wrapped in a `Tooltip` component. The tooltip's title is conditionally set based on whether the seat is booked or available.

- If a seat is booked, the tooltip displays the message: "This seat is already booked".
  ![bookedSeat](./assets/bookedSeat.png)
- If a seat is available, the tooltip displays the message: "Click to book this seat".
  ![UnbookedSeat](./assets/UnbookedSeat.png)

## Bug 5: Date Selection in Booking System

### Problem:

In the movie booking system, users were able to select previous dates from the current day for booking shows. This allowed bookings to be made on dates that had already passed, leading to potential confusion and operational issues.
![Previous Booking Dates](./assets/previousDateBookings1.png)

### Expected Behavior

Users should only be able to book shows for today or future dates. The system should restrict the selection of past dates in the date picker input, ensuring that all bookings are relevant and valid for upcoming shows only.

### Solution:

Modified the date selection input to disable all past dates. This was achieved by setting the `min` attribute of the date input field to the current date. Now, users cannot select a date earlier than the current day, ensuring that all bookings are for valid showtimes.

#### Updated Date Input
![Disabled Previous Booking Dates](./assets/disablePreviousDates.png)
