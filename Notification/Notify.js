import { tost } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessNotification = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      marginTop: "4.8rem",
      zIndex: "9999 !important",
      color: "black",
    },
  });
};

export const showErrorNotification = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      marginTop: "4.8rem",
      zIndex: "9999 !important",
      color: "red",
   
    },
  });
};
