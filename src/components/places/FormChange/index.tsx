import Button from "@mui/material/Button";
import { Place } from "@prisma/client";
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import { useState } from "react";

import Dialog from "@/components/common/Dialog";
import PlaceInputs from "@/components/places/placeInputs";

import styles from "./formChange.module.scss";

interface Props {
  place: Place;
}

export default function FormChange({ place }: Props) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  // Dialog
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const sendData = async () => {
    const formData = new FormData(formRef.current !== null ? formRef.current : undefined);
    const formDataObject = Object.fromEntries(formData);

    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ place: formDataObject }),
    };

    const res = await fetch(`/api/protected/place/${place.id}`, data);

    if (res.status == 200) {
      window.location.href = `/places/${place.id}`;
      router.push("/");

      closeDialog();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    openDialog();
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit} ref={formRef}>
      <PlaceInputs place={place} />
      <Button variant="outlined" color="primary" size="large" type="submit">
        Atualizar
      </Button>

      <Dialog
        open={open}
        handleClose={closeDialog}
        onConfirmation={sendData}
        title="Você tem certeza que deseja editar esse local?"
        text="Não será possível reverter as mudanças."
        YesButtonText="Salvar Alterações"
        id="edit-dialog"
      />
    </form>
  );
}
