import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

interface Props {
  id: string;
}

const EditPlaceButton = ({ id }: Props) => {
  return (
    <IconButton>
      <Link href={`/locais/${id}/edit`}>
        <a aria-label="Editar local">
          <EditIcon fontSize="large" />
        </a>
      </Link>
    </IconButton>
  );
};

export default EditPlaceButton;
