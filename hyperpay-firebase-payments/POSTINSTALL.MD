## How To Use The Extension

For both Mobile SDK and COPYandPAY implementation you would need to call the `prepareCheckout` endpoint.

You will call the `prepareCheckout` endpoint providing the following as query parameters:

- amount (required): amount of money to debit from the customer's account.
- currency (required): 3 characters code for currency, such as USD for United States Dollars and SAR for Saudi Riyals.

Then you will get a checkout ID in the response:

```
{
    result: {
        code: "000.200.100",
        description: "successfully created checkout"
    },
    buildNumber: "c15671ad690bd8208815796657ce6d98f23182dd@2022-11-16 14:39:17 +0000",
    timestamp: "2022-11-18 18:34:06+0000",
    ndc: "0D931F3723D66297021A86D3411F119A.uat01-vm-tx02",
    id: "0D931F3723D66297021A86D3411F119A.uat01-vm-tx02"
}
```

### Making a one-time payment with the Mobile SDK.

The next step would be to follow the HyperPay official docs to integrate the Mobile SDK with your app. [Mobile SDK Official Docs](https://wordpresshyperpay.docs.oppwa.com/tutorials/mobile-sdk)

### Making a one-time payment using the COPYandPAY

The next step would be to follow the HyperPay official docs to integrate the COPYandPAY with your web app. [COPYandPAY Official Docs](https://wordpresshyperpay.docs.oppwa.com/tutorials/integration-guide)

### After the implementation specific guide:

You can then use the `getPaymentStatus` endpoint to check the if the payment is still pending, succesful, or failed.

You will need to provide the checkoutID you received in step 1 as a query parameter:

- checkoutId (required): an ID identifying the current checkout session.
