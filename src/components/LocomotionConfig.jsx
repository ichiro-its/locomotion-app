/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useHandleProcess, useLogger, usePublisher } from 'kumo-app';
import NumberField from './NumberField';

import LocomotionContext from '../context/LocomotionContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LocomotionConfig() {
  const { locomotion } = useContext(LocomotionContext);

  const configPublisher = usePublisher();
  const logger = useLogger();

  const [publishingConfig, handlePublishConfig] = useHandleProcess(() => {
    const json = JSON.stringify(locomotion);
    return configPublisher
      .publish({
        json,
      })
      .then(() => {
        logger.success('Successfully published locomotion config.');
      })
      .catch((err) => {
        logger.error(`Failed to publish locomotion config! ${err.message}.`);
      });
  }, 500);

  useEffect(() => {
    handlePublishConfig();
  }, [locomotion]);

  return (
    <Grid container spacing={1}>
      <Grid md={3}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Position
          </Typography>
          {Object.keys(locomotion.position).map((key) => (
            <NumberField name="position" keys={key} value={locomotion.position[key]} />
          ))}
        </Item>
      </Grid>
      <Grid md={3}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Dribble
          </Typography>
          {Object.keys(locomotion.dribble)
            .map((key) => (
              <NumberField name="dribble" keys={key} value={locomotion.dribble[key]} />
            ))}
        </Item>
      </Grid>
      <Grid md={3}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Pivot
          </Typography>
          {Object.keys(locomotion.pivot)
            .map((key) => (
              <NumberField name="pivot" keys={key} value={locomotion.pivot[key]} />
            ))}
        </Item>
      </Grid>
      <Grid md={3}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Move
          </Typography>
          {Object.keys(locomotion.move)
            .map((key) => (
              <NumberField name="move" keys={key} value={locomotion.move[key]} />
            ))}
        </Item>
      </Grid>
      <Grid md={3}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Follow
          </Typography>
          {Object.keys(locomotion.follow)
            .map((key) => (
              <NumberField name="follow" keys={key} value={locomotion.follow[key]} />
            ))}
        </Item>
      </Grid>
      <Grid md={3}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Left Kick
          </Typography>
          {Object.keys(locomotion.left_kick)
            .map((key) => (
              <NumberField name="left_kick" keys={key} value={locomotion.left_kick[key]} />
            ))}
        </Item>
      </Grid>
      <Grid md={3}>
        <Item>
          <Typography variant="h6" component="div" sx={{ padding: 1 }}>
            Right Kick
          </Typography>
          {Object.keys(locomotion.right_kick)
            .map((key) => (
              <NumberField name="right_kick" keys={key} value={locomotion.right_kick[key]} />
            ))}
        </Item>
      </Grid>
    </Grid>
  );
}

export default LocomotionConfig;
