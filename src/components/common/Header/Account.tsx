import AddIcon from "@mui/icons-material/Add";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRef, useState } from "react";

import styles from "./account.module.scss";

const Account = () => {
  const session = useSession();
  const menuAnchor = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  if (session.status === "authenticated") {
    return (
      <>
        <div className={styles.avatarContainer} ref={menuAnchor}>
          <div className={`${styles.border} ${isOpen && styles.open}`}>
            <IconButton
              aria-controls={isOpen ? "account-menu" : undefined}
              aria-expanded={isOpen ? "true" : undefined}
              aria-haspopup="true"
              onClick={() => setIsOpen(true)}
            >
              <Avatar
                alt={session.data.user?.name === null ? undefined : session.data.user?.name}
                data-cy="avatar"
                imgProps={{ referrerPolicy: "no-referrer" }}
                src={session.data.user?.image === null ? undefined : session.data.user?.image}
              />
            </IconButton>
          </div>
        </div>
        <Menu
          anchorEl={menuAnchor.current}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          id="account-menu"
          onClick={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
          open={isOpen}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <Link href="/profile">
            <MenuItem>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Meu perfil
            </MenuItem>
          </Link>
          <Link href="/places/new">
            <MenuItem>
              <ListItemIcon>
                <AddIcon fontSize="small" />
              </ListItemIcon>
              Criar novo Local
            </MenuItem>
          </Link>
          <MenuItem data-cy="signOut" onClick={() => signOut()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sair
          </MenuItem>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => signIn()}>Fazer Login</button>
        <Link href="/auth/signUp">Criar Conta</Link>
      </>
    );
  }
};

export default Account;
