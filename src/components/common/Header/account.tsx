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

export default function Account() {
  const session = useSession();
  const menuAnchor = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  if (session.status === "authenticated") {
    return (
      <>
        <div className={styles.avatarContainer} ref={menuAnchor}>
          <div className={`${styles.border} ${isOpen && styles.open}`}>
            <IconButton
              onClick={() => setIsOpen(true)}
              aria-controls={isOpen ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isOpen ? "true" : undefined}
            >
              <Avatar
                src={session.data.user?.image === null ? undefined : session.data.user?.image}
                alt={session.data.user?.name === null ? undefined : session.data.user?.name}
                imgProps={{ referrerPolicy: "no-referrer" }}
                data-cy="avatar"
              />
            </IconButton>
          </div>
        </div>
        <Menu
          anchorEl={menuAnchor.current}
          id="account-menu"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onClick={() => setIsOpen(false)}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link href="/profile">
            <a>
              <MenuItem>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                Meu perfil
              </MenuItem>
            </a>
          </Link>
          <Link href="/places/new">
            <a>
              <MenuItem>
                <ListItemIcon>
                  <AddIcon fontSize="small" />
                </ListItemIcon>
                Criar novo Local
              </MenuItem>
            </a>
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
        <Link href="/auth/signUp">
          <a>Criar Conta</a>
        </Link>
      </>
    );
  }
}
