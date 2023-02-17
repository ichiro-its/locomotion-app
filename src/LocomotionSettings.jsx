/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {
  ClientProvider, PublisherProvider, useClient, useLogger, useHandleProcess,
} from 'kumo-app';

import LocomotionContext from './context/LocomotionContext';
import LocomotionConfig from './components/LocomotionConfig';
import SaveButton from './components/SaveButton';
import ReloadButton from './components/ReloadButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LocomotionSettings() {
  const { setLocomotionValue } = useContext(LocomotionContext);

  const client = useClient();
  const logger = useLogger();

  const [fetching, handleFetch] = useHandleProcess(() => client
    .call({})
    .then((response) => {
      logger.success('Successfully get config.');
      const locomotionData = JSON.parse(`${response.json.replace('/\\/g', '')}`);
      Object.keys(locomotionData).map((name) => Object.keys(locomotionData[name])
        .map((key) => setLocomotionValue(name, key, locomotionData[name][key])));
    })
    .catch((err) => {
      logger.error(`Failed to load config! ${err.message}.`);
    }), 500);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item onLoad={handleFetch}>
        <PublisherProvider
          messageType="suiryoku_interfaces/msg/SetConfig"
          topicName="set_config"
        >
          <LocomotionConfig />
        </PublisherProvider>
        <Grid container justifyContent="flex-end">
          <ClientProvider
            serviceType="suiryoku_interfaces/srv/SaveConfig"
            serviceName="/suiryoku/config/save_config"
          >
            <SaveButton />
          </ClientProvider>
          <ClientProvider
            serviceType="suiryoku_interfaces/srv/GetConfig"
            serviceName="/suiryoku/config/get_config"
          >
            <ReloadButton />
          </ClientProvider>
        </Grid>
      </Item>
    </Box>

  );
}

export default LocomotionSettings;
