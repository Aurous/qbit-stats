import React from "react";
import { Grid, Typography } from "@mui/material";

export default class Upload extends React.Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="stretch" >
        <Grid item xs={6}>
          <Typography noWrap variant="h6" alight="left">
            {this.props.name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" align="right">
            {this.props.down}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" align="right">
            {this.props.up}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}