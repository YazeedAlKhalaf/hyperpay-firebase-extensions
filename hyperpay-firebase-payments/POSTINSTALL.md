# 🤔 How To Use The Extension

> It is as easy as `1,2,3` ⚡️</br>
> ~ **someone** on the internet

## 1️⃣ Step 1

For both Mobile SDK and COPYandPAY implementation you would need to call the `prepareCheckout` endpoint.

You will call the `prepareCheckout` endpoint providing the following as query parameters:

- amount (required): amount of money to debit from the customer's account.
- currency (required): 3 characters code for currency, such as USD for United States Dollars and SAR for Saudi Riyals.

Then you will get a checkout ID in the response body:

```json
{
  "result": {
    "code": "000.200.100",
    "description": "successfully created checkout"
  },
  "buildNumber": "fb4fe4114371d8438e4abd502191b0b62de4e736@2023-02-02 13:33:22 +0000",
  "timestamp": "2023-02-03 12:02:21+0000",
  "ndc": "B79D941585C5722E9ADB418C32EA9FF5.uat01-vm-tx03",
  "id": "B79D941585C5722E9ADB418C32EA9FF5.uat01-vm-tx03"
}
```

## 2️⃣ Step 2

### 📱 Making a one-time payment with the Mobile SDK.

The next step would be to follow the HyperPay official docs to integrate the Mobile SDK with your app. [Mobile SDK Official Docs](https://wordpresshyperpay.docs.oppwa.com/tutorials/mobile-sdk)

### 🕸️ Making a one-time payment using the COPYandPAY

The next step would be to follow the HyperPay official docs to integrate the COPYandPAY with your web app. [COPYandPAY Official Docs](https://wordpresshyperpay.docs.oppwa.com/tutorials/integration-guide)

## 3️⃣ Step 3

### After the implementation specific guide:

You can then use the `getPaymentStatus` endpoint to check the if the payment is still pending, succesful, or failed.

You will need to provide the checkoutID you received in [step 1](#step-1) as a query parameter:

- checkoutId (required): an ID identifying the current checkout session.

Then you will get the status in the response body like this:

```json
{
  "result": {
    "code": "000.200.000",
    "description": "transaction pending"
  },
  "buildNumber": "fb4fe4114371d8438e4abd502191b0b62de4e736@2023-02-02 13:33:22 +0000",
  "timestamp": "2023-02-03 12:03:02+0000",
  "ndc": "B79D941585C5722E9ADB418C32EA9FF5.uat01-vm-tx03"
}
```
