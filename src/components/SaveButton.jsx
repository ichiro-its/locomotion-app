import React, { useContext } from 'react';
import { Button, CircularProgress } from '@mui/material';

import { useClient, useHandleProcess, useLogger } from 'kumo-app';

import LocomotionContext from '../context/LocomotionContext';

function SaveButton() {
  const { locomotion } = useContext(LocomotionContext);

  const client = useClient();
  const logger = useLogger();

  const [saving, handleSave] = useHandleProcess(() => {
    const json = JSON.stringify(locomotion);
    return client
      .call({ json })
      .then((response) => {
        logger.success(
          `Successfully save config with status ${response.status}.`,
        );
      })
      .catch((err) => {
        logger.error(`Failed to save config! ${err.message}.`);
      });
  }, 500);

  return (
    <Button
      onClick={handleSave}
      disabled={client == null || saving}
      color="primary"
      variant="contained"
      sx={{ margin: 1, top: 5 }}
    >
      {saving ? <CircularProgress size={24} /> : 'Save'}
    </Button>
  );
}

export default SaveButton;
