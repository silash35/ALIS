import {Paper, Grid, TextField, Button} from '@material-ui/core';

import style from './searchCard.module.scss';

export default function SearchCard() {
  return (
    <Paper elevation={3}>
      <Grid container
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <TextField id="outlined-basic" label="Movie Name" variant="outlined" />
        <Button variant="contained" color="primary">Open</Button>
      </Grid>
    </Paper>
  )
}