import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import DefaultHead from '../components/defaultHead';
import DefaultHeader from '../components/defaultHeader';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <DefaultHead />
      <DefaultHeader />
      <Button color="primary">Hello World</Button>
    </React.Fragment>
  )
}
