import * as functions from "firebase-functions";
import * as https from "https";
import * as querystring from "querystring";
import config from "./config";

export async function prepareCheckout(
  req: functions.https.Request,
  res: functions.Response<any>
) {
  const amount = req.query.amount;
  const paymentType = "DB";
  const currency = req.query.currency;

  if (amount == null || currency == null) {
    return res.status(400).json({
      error: `Please provide the ${amount == null ? "amount" : ""} ${
        currency == null ? "currency" : ""
      }.`,
    });
  }

  const path: string = "/v1/checkouts";
  const data: string = querystring.stringify({
    entityId: config.hyperpayEntityId,
    amount: amount?.toString(),
    currency: currency?.toString(),
    paymentType: paymentType,
  });
  const options: https.RequestOptions = {
    port: 443,
    host: "eu-test.oppwa.com",
    path: path,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": data.length,
      Authorization: `Bearer ${config.hyperpayAuthorization}`,
    },
  };

  return new Promise(function (resolve, reject) {
    const postRequest = https.request(options, function (result) {
      const buf: any = [];
      result.on("data", function (chunk) {
        buf.push(Buffer.from(chunk));
      });

      result.on("end", function () {
        const jsonString = Buffer.concat(buf).toString("utf8");

        try {
          resolve(JSON.parse(jsonString));
          return res.status(200).send(jsonString);
        } catch (error) {
          reject(error);
          console.error(error);
          return res.status(403).json({
            error: JSON.parse(jsonString),
          });
        }
      });
    });

    postRequest.on("error", reject);
    postRequest.write(data);
    postRequest.end();
  });
}
