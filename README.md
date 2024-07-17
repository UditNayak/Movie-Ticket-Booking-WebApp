# Movie-Ticket-Booking-WebApp

## Bug 1: Moving the Seat Booking Matrix to the Middle.
![Seat Booking Matrix in the Middle](./project/assets/seatBookingMatrix.png)

## Bug 2: Added Hyperlinks to Home & BookMyShow Component
![Added Hyperlinks to Home & BookMyShow Component](./project/assets/HyperLinks.gif)


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
![Unauthorized Page](./project/assets/unauthorised.png)

## Bug 4: Booked Seats Being Considered for Booking

### Issue Description
When a user clicks on a seat that has already been booked, the "Pay Now" button appears, and the amount of the booked seat is included in the total price and selected seats. This should not happen, as booked seats should not be available for selection.
![DisableButton](./project/assets/DisableButton.png)

### Expected Behavior
Users should only be able to book unbooked seats. Once a payment is successful, the booking details should be updated in the database, and the user should be redirected to the "/profile" page.

### Solution
To prevent booked seats from being selected and included in the total price, the `onClick` handler for seat selection was updated. This ensures that booked seats cannot be selected or deselected by users.

## BookShow UI Enhancement using Tooltip ( from antd )
This update enhances the `BookShow.js` component by integrating tooltips that indicate the booking status of each seat. The tooltips provide immediate feedback to users when they hover over a seat, informing them if the seat is already booked or available for booking.

 - Each seat button is now wrapped in a `Tooltip` component. The tooltip's title is conditionally set based on whether the seat is booked or available.

- If a seat is booked, the tooltip displays the message: "This seat is already booked".
![bookedSeat](./project/assets/bookedSeat.png)
- If a seat is available, the tooltip displays the message: "Click to book this seat".
![UnbookedSeat](./project/assets/UnbookedSeat.png)




- Email Not Comming
- OTP Not Comming
- Users can book from previous dates
- Admin not able to see its booking
- Axios error with locally stored token
- Home and profile pe click karne par blue hoo jata hai, par baad mein change nehi hota
