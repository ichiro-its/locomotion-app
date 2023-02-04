import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" component="div" sx={{ padding: 1 }}>
              Position
            </Typography>
            {Object.keys(locomotion.Position).map((key) => (
              <NumberField name="Position" keys={key} value={locomotion.Position[key]} />
            ))}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" component="div" sx={{ padding: 1 }}>
              Pivot
            </Typography>
            {Object.keys(locomotion.Pivot)
              .map((key) => (
                <NumberField name="Pivot" keys={key} value={locomotion.Pivot[key]} />
              ))}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" component="div" sx={{ padding: 1 }}>
              Dribble
            </Typography>
            {Object.keys(locomotion.Dribble)
              .map((key) => (
                <NumberField name="Dribble" keys={key} value={locomotion.Dribble[key]} />
              ))}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" component="div" sx={{ padding: 1 }}>
              Follow
            </Typography>
            {Object.keys(locomotion.Follow)
              .map((key) => (
                <NumberField name="Follow" keys={key} value={locomotion.Follow[key]} />
              ))}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" component="div" sx={{ padding: 1 }}>
              Left Kick
            </Typography>
            {Object.keys(locomotion.LeftKick)
              .map((key) => (
                <NumberField name="LeftKick" keys={key} value={locomotion.LeftKick[key]} />
              ))}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" component="div" sx={{ padding: 1 }}>
              Right Kick
            </Typography>
            {Object.keys(locomotion.RightKick)
              .map((key) => (
                <NumberField name="RightKick" keys={key} value={locomotion.RightKick[key]} />
              ))}
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography variant="h6" component="div" sx={{ padding: 1 }}>
              Move
            </Typography>
            {Object.keys(locomotion.Move)
              .map((key) => (
                <NumberField name="Move" keys={key} value={locomotion.Move[key]} />
              ))}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LocomotionConfig;
