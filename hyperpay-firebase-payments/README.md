# HyperPay Payments

**Author**: Yazeed AlKhalaf (**[https://github.com/YazeedAlKhalaf](https://github.com/YazeedAlKhalaf)**)

**Description**: An easy way to setup your payment backend endpoints for HyperPay.

**Configuration Parameters:**

- Cloud Functions location: Where do you want to deploy the functions created for this extension? You usually want a location close to your database. For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).

- HyperPay Authorization Token: What is your HyperPay Authorization Token? This the token you get from HyperPay when you create an account, it is used to authenticate your requests to HyperPay API. It is a base64 encoded token.
  HyperPay's description: Authorization header with Bearer authentication scheme. Access token can be taken from the backend UI under Administration > Account data > Merchant / Channel Info only if you have specific administration rights.

- HyperPay Entity ID: What is your HyperPay Entity ID? This is an ID that is used to identify your merchant with HyperPay. It is a string of length 32 characters, that contain lower case letters from 'a' to 'f' and numbers from '0' to '9'.
  HyperPay's description: The entity required to authorize the request. This should be the channel entity identifier. In case channel dispatching is activated then it should be the merchant entity identifier.

- Minimum instances for prepareCheckout function: Set the minimum number of function instances that should be always be available to prepareCheckout. This number can be adjusted to reduce cold starts and increase the responsiveness of prepareCheckout requests. Suggested values are 0 or 1. Please note this setting will likely incur billing costss, see the [Firebase documentation](https://firebase.google.com/docs/functions/manage-functions#reduce_the_number_of_cold_starts) for more information.

**Cloud Functions:**

- **Prepare Checkout:** Prepares checkout given you provide an amount and a currency, it returns an object containing the checkout ID.

- **Get Payment Status:** Gets the payment status given you provide a checkout ID, it returns the status of the checkout session.
