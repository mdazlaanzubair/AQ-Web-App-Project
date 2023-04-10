import { useThemeContext } from "./context/theme/ThemeContext";
import AppRoutes from "./routing/AppRoutes";

export default function App() {
  const { darkMode } = useThemeContext();

  return (
    <div
      className="container min-w-full min-h-screen p-5"
      data-theme={darkMode ? "night" : "wireframe"}
    >
      <AppRoutes />
    </div>
  );
}
