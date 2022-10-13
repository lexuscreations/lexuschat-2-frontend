import { toast } from "react-toastify";
import config from "../../../config/app.config";

const Toast = {};
const toastType = ["error", "warning", "success", "info"];
toastType.forEach((type) => {
  Toast[type] = (msg) => toast[type](msg, config.CONFIG_TOAST);
});

export { Toast };
