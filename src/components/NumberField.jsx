import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LocomotionContext from '../context/LocomotionContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  padding: theme.spacing(1),
  fontSize: '0.9rem',
}));

function NumberField(props) {
  const {
    name,
    keys,
    value,
  } = props;
  const {
    setLocomotionValue,
  } = useContext(LocomotionContext);

  function setValue(val) {
    setLocomotionValue(name, keys, val + value);
  }

  function changeValue(val) {
    setLocomotionValue(name, keys, val);
  }

  return (
    <Item>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <ItemTitle>
            {keys.toUpperCase()}
          </ItemTitle>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(-10)}>
            <KeyboardDoubleArrowLeftIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(-1)}>
            <KeyboardArrowLeft />
          </IconButton>
        </Grid>
        <Grid item xs={1.5}>
          <TextField
            value={value}
            margin="dense"
            variant="standard"
            type="number"
            InputProps={{
              inputProps: {
                style: { textAlign: 'center' },
              },
            }}
            onChangeCapture={(event) => {
              if (event.target.value === '') {
                changeValue(0.0);
              } else {
                changeValue(parseFloat(event.target.value));
              }
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(1)}>
            <KeyboardArrowRight />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={() => setValue(10)}>
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Item>
  );
}

export default NumberField;
