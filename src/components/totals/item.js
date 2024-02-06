import React from 'react';
import { Grid, Typography } from "@mui/material";

export default class Totals extends React.Component {
  render() {
    return (
      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="stretch" >
          <Grid item xs={6} >
            <Typography variant="h5" >
              {this.props.label}:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right" variant="h5" >
              {this.props.data}
            </Typography>
          </Grid>
        </Grid>
      </Grid >
    )
  }
}