import Switch from "@mui/material/Switch";
import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const checked = theme == "light" ? true : false;

  return (
    <form>
      <Switch
        checked={checked}
        color="primary"
        inputProps={{ "aria-label": "Mudar tema do site (Claro Escuro)" }}
        onChange={toggleTheme}
      />
    </form>
  );
};

export default ThemeSwitch;
