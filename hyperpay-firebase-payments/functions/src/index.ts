import * as functions from "firebase-functions";
import { prepareCheckout as prepareCheckoutEndpoint } from "./prepare_checkout";
import { getPaymentStatus as getPaymentStatusEndpoint } from "./get_payment_status";

export const prepareCheckout = functions.https.onRequest(async function (
  req: functions.https.Request,
  res: functions.Response<any>
) {
  await prepareCheckoutEndpoint(req, res);
  return;
});

export const getPaymentStatus = functions.https.onRequest(async function (
  req: functions.https.Request,
  res: functions.Response<any>
) {
  await getPaymentStatusEndpoint(req, res);
  return;
});
