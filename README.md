# Movie-Ticket-Booking-WebApp

## Bug 1: Moving the Seat Booking Matrix to the Middle.
![Seat Booking Matrix in the Middle](./project/assets/seatBookingMatrix.png)

## Bug 2: Added Hyperlinks to Home & BookMyShow Component
![Added Hyperlinks to Home & BookMyShow Component](./project/assets/HyperLinks.gif)


## Bug 3: Role-Based Access Control

### Problem:
Previously, users were able to access the `/admin` and `/partner` panels regardless of their roles. Similarly, partners could access the `/admin` panel.

### Solution:
Implemented a role-based access control system. Unauthorized users attempting to access restricted panels will be redirected to the Unauthorized page (`/unauthorised`).

![Unauthorized Page](./project/assets/unauthorised.png)



- Even if a seat is booked, still it is showing the payment option.
- Admin not able to see its booking
- Axios error with locally stored token
- Home and profile pe click karne par blue hoo jata hai, par baad mein change nehi hota