import GoogleIcon from "@mui/icons-material/Google";
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
  signUp?: boolean;
}

export default function FormLogin({ providers, csrfToken, signUp }: Props) {
  const { google } = providers;

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
          {signUp ? "Continue com o Google" : "Entrar com o Google"}
        </Button>
        {csrfToken && (
          <form method="post" action="/api/auth/callback/credentials" data-cy="signInForm">
            <h2>Use credentials during development and testing</h2>
            <p>The test users are in the Cypress Fixtures folder </p>
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
