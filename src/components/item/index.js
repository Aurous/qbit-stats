import React from "react";
import { Grid, Typography } from "@mui/material";

export default class Item extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="stretch" >
        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            {this.props.label}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            {this.props.data}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}