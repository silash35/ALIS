import CssBaseline from '@material-ui/core/CssBaseline';

import DefaultHead from '../components/defaultHead';
import CenterLayout from '../components/centerLayout';
import SearchCard from '../components/searchCard';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <DefaultHead />

      <CenterLayout>
        <SearchCard />
      </CenterLayout>

    </React.Fragment>
  )
}
