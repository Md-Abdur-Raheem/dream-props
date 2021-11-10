import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(270deg, #f82a7e 0%, #752a90 100%)',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 48,
    padding: '0 30px 0 30px',
    fontFamily: "Noto Sans",
    fontWeight: 600
  },
});

export default function DreamBtn(props) {
  const classes = useStyles();
    return <Button className={classes.root}>{props.children}</Button>;
}