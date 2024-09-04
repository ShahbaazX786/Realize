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

const getDeviceType = (key: number) => {
  switch (key) {
    case 1:
      return "Smart Phone";
    case 2:
      return "Tablet";
    case 3:
      return "Desktop";
    case 4:
      return "TV";
    default:
      return "Unknown";
  }
};

const getSystemUptime = (milliseconds: number) => {
  let totalSeconds = Math.floor(milliseconds / 1000);

  // Calculate days
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;

  // Calculate hours
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

  // Calculate minutes
  let minutes = Math.floor(totalSeconds / 60);

  // Remaining seconds
  let seconds = totalSeconds % 60;

  // Format time string
  let timeString = `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return timeString;
};

function getBytesToMegabytes(bytes: number) {
  const megabytes = bytes / 1048576;
  if (megabytes > 1024) {
    return `${Math.round((megabytes / 1024) * 10) / 10} GB`;
  }
  return `${Math.round(megabytes)} MB`;
}

export {
  getUrl,
  getBatteryState,
  getBatteryLevel,
  getDeviceType,
  getSystemUptime,
  getBytesToMegabytes,
};
