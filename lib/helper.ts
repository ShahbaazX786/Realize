import { urls } from "./constants";

const getUrl = (key: string) => {
  return urls[key];
};

const getBatteryState = (key: number) => {
  switch (key) {
    case 1:
      return "Discharging";
    case 2:
      return "Charging";
    case 3:
      return "Full";
    default:
      return "Unavailable";
  }
};

const getBatteryLevel = (value: number) => {
  const roundedValue = Math.round(value * 100) / 100;
  return Math.ceil(roundedValue * 100);
};

export { getUrl, getBatteryState, getBatteryLevel };
