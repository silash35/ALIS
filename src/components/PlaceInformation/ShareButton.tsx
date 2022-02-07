import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRef, useState } from "react";

import styles from "./ShareButton.module.scss";

const ShareButton = () => {
  const [open, setOpen] = useState(false);
  const InputRef = useRef<HTMLInputElement>(null);

  const placeUrl = typeof window !== "undefined" ? window.location.href : "";
  const placeText = "Conheça esse local";
  const encodedPlaceURL = encodeURIComponent(placeUrl);
  const encodedPlaceText = encodeURI(placeText);

  const facebookUrl = `https://www.facebook.com/sharer.php?u=${encodedPlaceURL}`;
  const twitterUrl = `https://twitter.com/share?url=${encodedPlaceURL}&text=${encodedPlaceText}`;
  const whatsAppUrl = `https://wa.me/?text=${encodedPlaceText} ${encodedPlaceURL}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedPlaceURL}&title=${encodedPlaceText}`;

  const goToUrl = (url: string) => {
    window.open(url, "_blank");
  };

  const openDialog = async () => {
    if (typeof navigator.share !== "undefined") {
      try {
        await navigator.share({
          title: "ALIS",
          text: placeText,
          url: placeUrl,
        });
      } catch {
        // do nothing
      }
    } else {
      setOpen(true);
    }
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const copyLink = () => {
    InputRef.current?.select();
    InputRef.current?.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        id={styles.button}
        size="large"
        startIcon={<ShareIcon />}
        onClick={openDialog}
      >
        Compartilhar
      </Button>

      <Dialog open={open} onClose={closeDialog} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">
          <div className={styles.title}>
            <div>Compartilhe esse local</div>
            <IconButton aria-label="Cancelar" onClick={closeDialog}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className={styles.container}>
            <IconButton
              onClick={() => {
                goToUrl(facebookUrl);
              }}
              aria-label="Compartilhar no Facebook"
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => {
                goToUrl(twitterUrl);
              }}
              aria-label="Compartilhar no Twitter"
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => {
                goToUrl(whatsAppUrl);
              }}
              aria-label="Compartilhar no WhatsApp"
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() => {
                goToUrl(linkedInUrl);
              }}
              aria-label="Compartilhar no LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </div>
          <div className={styles.container}>
            <Input
              autoFocus
              margin="dense"
              defaultValue={placeUrl}
              readOnly
              fullWidth
              inputRef={InputRef}
            />
            <Button
              aria-label="Copiar link do local"
              variant="outlined"
              color="primary"
              onClick={copyLink}
            >
              Copiar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareButton;
