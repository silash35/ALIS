import AddIcon from "@mui/icons-material/Add";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRef, useState } from "react";

import styles from "./account.module.scss";

export default function Account() {
  const data = useSession();
  const menuAnchor = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  if (data.status === "authenticated") {
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
                src={data.data.user?.image === null ? undefined : data.data.user?.image}
                alt={data.data.user?.name === null ? undefined : data.data.user?.name}
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
          <MenuItem>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            Meu perfil
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            Criar novo Local
          </MenuItem>
          <MenuItem onClick={() => signOut()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Sair
          </MenuItem>
        </Menu>
      </>
    );
  } else {
    return <button onClick={() => signIn()}>Fazer Login</button>;
  }
}
