# HyperPay Payments

**Author**: Yazeed AlKhalaf (**[https://github.com/YazeedAlKhalaf](https://github.com/YazeedAlKhalaf)**)

**Description**: An easy way to setup your payment backend endpoints for HyperPay.

**Details**: Use this extension as a backend for your [HyperPay](https://www.hyperpay.com/) payments.

This extension supports the following use cases:

- Process one-time payments with [Mobile SDK](https://wordpresshyperpay.docs.oppwa.com/tutorials/mobile-sdk).
- Process one-time payments with [COPYandPAY](https://wordpresshyperpay.docs.oppwa.com/tutorials/integration-guide).

## 🧩 Install this extension

### Console

[![Install this extension in your Firebase project](https://www.gstatic.com/mobilesdk/210513_mobilesdk/install-extension.png "Install this extension in your Firebase project")][install-link]

[install-link]: https://console.firebase.google.com/project/_/extensions/install?ref=yazeedalkhalaf/hyperpay-firebase-payments

### Firebase CLI

```bash
firebase ext:install yazeedalkhalaf/hyperpay-firebase-payments --project=[your-project-id]
```

> Learn more about installing extensions in the Firebase Extensions documentation:
> [console](https://firebase.google.com/docs/extensions/install-extensions?platform=console),
> [CLI](https://firebase.google.com/docs/extensions/install-extensions?platform=cli)

#### Billing

This extension uses the following Firebase services which may have associated charges:

- Cloud Funtions

This extensions also uses the following third-party services:

- HyperPay: You need to contact HyperPay to get a deal or a contract to start receive payments with live credentials, they have some fees that depend on your business.

#### Note from Firebase

To install this extension, your Firebase project must be on the Blaze (pay-as-you-go) plan. You will only be charged for the resources you use. Most Firebase services offer a free tier for low-volume use. [Learn more about Firebase billing.](https://firebase.google.com/pricing)

Starting August 17 2020, you will be billed a small amount (typically less than $0.10) when you install or reconfigure this extension. See the [Cloud Functions for Firebase billing FAQ](https://firebase.google.com/support/faq#expandable-15) for a detailed explanation.

**Configuration Parameters:**

- Cloud Functions location: Where do you want to deploy the functions created for this extension? You usually want a location close to your database. For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).

- HyperPay Environment: What is your HyperPay Environment? This is the environment you are using with HyperPay, it can be either "test" or "live". It is used to determine the base URL for the HyperPay API.

- HyperPay Authorization Token: What is your HyperPay Authorization Token? This the token you get from HyperPay when you create an account, it is used to authenticate your requests to HyperPay API. It is a base64 encoded token.
  HyperPay's description: Authorization header with Bearer authentication scheme. Access token can be taken from the backend UI under Administration > Account data > Merchant / Channel Info only if you have specific administration rights.

- HyperPay Entity ID: What is your HyperPay Entity ID? This is an ID that is used to identify your merchant with HyperPay. It is a string of length 32 characters, that contain lower case letters from 'a' to 'f' and numbers from '0' to '9'.
  HyperPay's description: The entity required to authorize the request. This should be the channel entity identifier. In case channel dispatching is activated then it should be the merchant entity identifier.

- Minimum instances for prepareCheckout function: Set the minimum number of function instances that should be always be available to prepareCheckout. This number can be adjusted to reduce cold starts and increase the responsiveness of prepareCheckout requests. Suggested values are 0 or 1. Please note this setting will likely incur billing costss, see the [Firebase documentation](https://firebase.google.com/docs/functions/manage-functions#reduce_the_number_of_cold_starts) for more information.

**Cloud Functions:**

- **prepareCheckout:** Prepares checkout given you provide an amount and a currency, it returns an object containing the checkout ID.

- **getPaymentStatus:** Gets the payment status given you provide a checkout ID, it returns the status of the checkout session.
