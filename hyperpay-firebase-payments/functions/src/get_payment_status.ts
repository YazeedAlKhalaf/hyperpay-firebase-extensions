import * as functions from "firebase-functions";
import * as https from "https";
import config from "./config";
import { Utils } from "./utils";

export async function getPaymentStatus(
  req: functions.https.Request,
  res: functions.Response<any>
) {
  const checkoutId = req.query.checkoutId;
  if (checkoutId == null) {
    return res.status(400).json({
      error: "Please provide the checkoutId.",
    });
  }

  var path: string = `/v1/checkouts/${checkoutId?.toString()}/payment`;
  path += `?entityId=${config.hyperpayEntityId}`;
  functions.logger.info("Path: ", path);

  const options: https.RequestOptions = {
    port: 443,
    host: Utils.getApiHostFromEnvironmentType(),
    path: path,
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.hyperpayAuthorization}`,
    },
  };

  return new Promise(function (resolve, reject) {
    const getPaymentStatusRequest = https.request(options, function (result) {
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
          functions.logger.error(error);
          return res.status(403).json({
            error: JSON.parse(jsonString),
          });
        }
      });
    });

    getPaymentStatusRequest.on("error", reject);
    getPaymentStatusRequest.end();
  });
}
