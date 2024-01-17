import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

interface Props {
  id: string;
}

const EditPlaceButton = ({ id }: Props) => (
  <IconButton>
    <Link aria-label="Editar local" href={`/places/${id}/edit`}>
      <EditIcon fontSize="large" />
    </Link>
  </IconButton>
);

export default EditPlaceButton;
