/* eslint-disable no-unreachable */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import { NotificationManager } from "react-notifications";

export const NotificationsToast = (type, subTitle, title) => {
  let timeOut = 3000;
  switch (type) {
    case "info":
      NotificationManager.info(
        subTitle === null ? null : subTitle,
        title === null ? null : title,
        timeOut
      );
      break;
    case "done":
      NotificationManager.success(
        subTitle === null ? null : subTitle,
        title === null ? null : title,
        timeOut
      );
      break;
    case "warn":
      NotificationManager.warning(
        subTitle === null ? null : subTitle,
        title === null ? null : title,
        timeOut
      );
      break;
    case "error":
      NotificationManager.error(
        subTitle === null ? null : subTitle,
        title === null ? null : title,
        timeOut
      );
    case null:
      return null;
      break;
  }
};
