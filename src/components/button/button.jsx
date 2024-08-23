import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { WiDaySunny } from "react-icons/wi";
import { CiDark } from "react-icons/ci";
function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      <span className="slider round">
        <WiDaySunny className="icon" />

        <CiDark className="icon" />
      </span>
    </label>
  );
}

export default Button;
