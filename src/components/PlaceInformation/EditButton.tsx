import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Link from "next/link";

interface Props {
  id: string;
}

const EditPlaceButton = ({ id }: Props) => {
  return (
    <IconButton aria-label="delete place">
      <Link as={`/locais/${id}/edit`} href={`/locais/${id}/edit`}>
        <a>
          <EditIcon fontSize="large" />
        </a>
      </Link>
    </IconButton>
  );
};

export default EditPlaceButton;
