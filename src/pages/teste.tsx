import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
  const data = useSession();
  const session = data.data;

  if (session) {
    return (
      <article>
        <p>Signed in as {session?.user?.email} </p>

        <img src={session?.user?.image !== null ? session?.user?.image : undefined} />

        <p>{JSON.stringify(data, null, 4)}</p>

        <button onClick={() => signOut()}>Sign out</button>
      </article>
    );
  }
  return (
    <article>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </article>
  );
}
