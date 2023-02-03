import config from "./config";

export class Utils {
  static getApiHostFromEnvironmentType(): string {
    switch (config.hyperpayEnvironment) {
      case "live":
        return "oppwa.com";
      case "test":
      default:
        return "eu-test.oppwa.com";
    }
  }
}
