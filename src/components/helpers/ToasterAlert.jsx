import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeContext } from "../../context/theme/ThemeContext";

const ToasterAlert = () => {
  const { darkMode } = useThemeContext();
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={darkMode ? "dark" : "light"}
    />
  );
};

export default ToasterAlert;
