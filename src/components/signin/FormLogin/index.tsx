import GoogleIcon from "@mui/icons-material/Google";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

import styles from "./formLogin.module.scss";

interface Props {
  providers: {
    google: {
      id: string;
    };
  };
}

export default function FormLogin({ providers }: Props) {
  const { theme } = useContext(ThemeContext);
  const { google } = providers;
  const matches = useMediaQuery("(min-width:400px)");

  return (
    <main className={styles.main}>
      <article className={`${styles.card} ${styles[theme]}`}>
        <h1 className={styles.title}>alis</h1>
        <Button
          variant="contained"
          size="large"
          startIcon={<GoogleIcon />}
          onClick={() => signIn(google.id)}
        >
          {matches ? "Faça Login com o Google" : "Logar com o Google"}
        </Button>
      </article>
    </main>
  );
}
