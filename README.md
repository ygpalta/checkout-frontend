# Abandoned Checkout Recovery Panel

This project is made using MongoDB, Express.js, React.js and Node (MERN Stack). 

[Live Project Link - https://abandoned-checkout-frontend.herokuapp.com/ (Demo Cart Page)](https://abandoned-checkout-frontend.herokuapp.com)

[Admin Panel - https://abandoned-checkout-frontend.herokuapp.com/admin](https://abandoned-checkout-frontend.herokuapp.com/admin)

[API/Webhook - https://abandoned-checkout-recovery.herokuapp.com/](https://abandoned-checkout-recovery.herokuapp.com/)

## Pages

In the project there are demo pages for order, checkout and Admin Page to configure schedule and view emails sent.

### `/`

Shows Cart items and input for email. 'Proceed to Checkout' Button calls the API to store cart and proceed to checkout.
Rest customer details are hard coded.

### `/checkout/:id`

Launches the checkout page. checkout_id is generated when user clicks on "proceed to Checkout" button.
'Pay' Button calls the api for order and no further email shall be sent to user after this.
'Cancel' Button calls the api to register abandoned checkout.

### `/admin`

Admin page provide settings to set duration for 3 emails after which reminder is sent to customer's email for checkout.
'Sent Mails' & 'Scheduled Mails' gives the list of mails sent earlier and scheduled to be sent later.
