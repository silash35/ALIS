import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

import GoogleIcon from "@/components/common/icons/Google";

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

const FormLogin = ({ providers, csrfToken, signUp }: Props) => {
  const { google } = providers;

  return (
    <main>
      <article className={styles.card}>
        <h1 className={styles.title}>alis</h1>
        <Button
          data-cy="googleButton"
          onClick={() => signIn(google.id)}
          size="large"
          startIcon={<GoogleIcon />}
          variant="contained"
        >
          {signUp ? "Inscrever-se com o Google" : "Fazer login com o Google"}
        </Button>
        {csrfToken && (
          <form action="/api/auth/callback/credentials" data-cy="signInForm" method="post">
            <h2>Use credentials during development and testing</h2>
            <p>The test users are in the Cypress Fixtures folder </p>
            <input defaultValue={csrfToken} name="csrfToken" type="hidden" />
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
};

export default FormLogin;
