import styles from "./userCard.module.scss";

interface Props {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

const UserCard = ({ user }: Props) => (
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
        data-cy="profileImage"
        referrerPolicy="no-referrer"
        src={user?.image !== null ? user?.image : undefined}
      />
    </div>
  </article>
);

export default UserCard;
