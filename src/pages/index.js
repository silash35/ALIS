import DefaultHead from '../components/defaultHead';
import DefaultHeader from '../components/defaultHeader';

import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div>
      <DefaultHead />
      <DefaultHeader />
      <Button color="primary">Hello World</Button>
    </div>
  )
}
