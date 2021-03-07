import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import ThemeSwitch from "../ThemeSwitch";
import styles from "./footer.module.scss";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${styles.footer} ${styles[theme]}`}>
      <p>No rights reserved. Maintained by Silas Henrique.</p>
      <ThemeSwitch />
    </header>
  );
};

export default Footer;
