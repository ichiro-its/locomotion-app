import React, {
  useContext, useEffect,
} from 'react';
import { Button, CircularProgress } from '@mui/material';

import { useClient, useHandleProcess, useLogger } from 'kumo-app';

import LocomotionContext from '../context/LocomotionContext';

function ReloadButton() {
  const {
    setLocomotionValue,
  } = useContext(LocomotionContext);

  const client = useClient();
  const logger = useLogger();

  const [reloading, handleReload] = useHandleProcess(() => client
    .call({})
    .then((response) => {
      logger.success('Successfully get config.');
      const locomotion = JSON.parse(`${response.json.replace('/\\/g', '')}`);
      Object.keys(locomotion).map((name) => Object.keys(locomotion[name])
        .map((key) => setLocomotionValue(name, key, locomotion[name][key])));
    })
    .catch((err) => {
      logger.error(`Failed to load config! ${err.message}.`);
    }), 500);

  useEffect(() => {
    handleReload();
  }, []);

  return (
    <Button
      onClick={handleReload}
      disabled={client == null || reloading}
      color="warning"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
    >
      {reloading ? <CircularProgress size={24} /> : 'Reload'}
    </Button>
  );
}

export default ReloadButton;
