import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { useState } from "react";

import Dialog from "@/components/common/Dialog";

interface Props {
  id: string;
}

const DeletePlaceButton = ({ id }: Props) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deletePlace = async () => {
    const data = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(`/api/protected/place/${id}`, data);

    if (res.status == 200) {
      router.push("/");
      handleClose();
    }
  };

  return (
    <>
      <IconButton aria-label="delete place" onClick={handleOpen}>
        <DeleteIcon fontSize="large" />
      </IconButton>

      <Dialog
        YesButtonText="Deletar"
        handleClose={handleClose}
        id="delete-dialog"
        onConfirmation={deletePlace}
        open={open}
        text="Todo o conteúdo será perdido para sempre"
        title="Você tem certeza que deseja deletar esse local?"
      />
    </>
  );
};

export default DeletePlaceButton;
