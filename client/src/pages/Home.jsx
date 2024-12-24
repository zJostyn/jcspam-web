import { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import SubscriptionDialog from '../components/SubscriptionDialog';

const Home = () => {
  useEffect(() => {
    document.title = 'JC Spam';
  }, []);

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <ResponsiveAppBar />
      <Box display='flex' alignItems='center' flexDirection='column'>
        <h1>JC Spam - zJostyn</h1>

        <Box
          marginY={4}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          {/*<Box display='flex'>
            <SubscriptionDialog />
          </Box>*/}

          <h3>GitHub</h3>
          <Box display='flex'>
            <Button
              style={{ marginRight: 2 }}
              variant='outlined'
              startIcon={<FontAwesomeIcon icon={faGithub} />}
              onClick={() => openNewTab('https://github.com/zjostyn/jcspam-web')}
            >
              Web App
            </Button>
            <Button
              style={{ marginRight: 2 }}
              variant='outlined'
              startIcon={<FontAwesomeIcon icon={faGithub} />}
              onClick={() => openNewTab('https://github.com/zjostyn/jcspam-extension')}
            >
              Extension
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
