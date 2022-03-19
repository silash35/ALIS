import styles from "./userCard.module.scss";

interface Props {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

export default function UserCard({ user }: Props) {
  return (
    <article className={styles.card}>
      <div>
        <h1>{user.name}</h1>
        <p>{user?.email} </p>
        <p>
          Edite suas informações pelo seu
          <a href="https://myaccount.google.com/"> Perfil do Google</a>
        </p>
      </div>
      <div>
        <img
          src={user?.image !== null ? user?.image : undefined}
          data-cy="profileImage"
          referrerPolicy="no-referrer"
        />
      </div>
    </article>
  );
}
