import { createContext, useState } from "react";
import MySnackbar from "../components/MySnackbar";

export const ToastContext = createContext();


export default function ToastProvider({children})
{
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const showToast = () => {
      setOpen(true);
    };

    const HideToast = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    }; 
    function showMySnackbar(mess) {
      setMessage(mess);
      showToast();
    }

    return (
      <>
        <ToastContext.Provider value={{showMySnackbar}}>
          {children}
          <MySnackbar open={open} handleClose={HideToast} message={message} />
        </ToastContext.Provider>
      </>
    );
}