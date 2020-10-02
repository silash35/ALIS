import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export default function DefaultHeader() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            Menu
          </IconButton>
          <Typography variant="h6" color="inherit"> Photos </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
}