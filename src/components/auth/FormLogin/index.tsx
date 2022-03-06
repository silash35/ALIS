import GoogleIcon from "@mui/icons-material/Google";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

import styles from "./formLogin.module.scss";

interface Props {
  providers: {
    google: {
      id: string;
    };
  };
  csrfToken: string;
}

export default function FormLogin({ providers, csrfToken }: Props) {
  const { google } = providers;
  const matches = useMediaQuery("(min-width:400px)");

  return (
    <main>
      <article className={styles.card}>
        <h1 className={styles.title}>alis</h1>
        <Button
          variant="contained"
          size="large"
          startIcon={<GoogleIcon />}
          onClick={() => signIn(google.id)}
        >
          {matches ? "Faça Login com o Google" : "Logar com o Google"}
        </Button>
        {csrfToken && (
          <form method="post" action="/api/auth/callback/credentials">
            <h2>Use credentials during development and testing</h2>
            <p>Try users from Cypress fixtures</p>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Username
              <input name="username" type="text" />
            </label>
            <label>
              Password
              <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
          </form>
        )}
      </article>
    </main>
  );
}
