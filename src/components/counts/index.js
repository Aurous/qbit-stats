import React from "react";
import { Grid } from "@mui/material";

import Item from '../item';

import { format } from '../../service';

export default class Totals extends React.Component {
  getDownload() {
    const torrents = format.objectToMap(this.props.torrents) || []
    return torrents.filter(({ dlspeed }) => !!dlspeed).length;
  }

  getUpload() {
    const torrents = format.objectToMap(this.props.torrents) || []
    return torrents.filter(({ upspeed }) => !!upspeed).length;
  }

  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="stretch" >
        <Grid item xs={6} sx={{ maxHeight: 160 }}>
          <Item label="Active Down" data={this.getDownload()} />
        </Grid>
        <Grid item xs={6} sx={{ maxHeight: 160 }}>
          <Item label="Active Up" data={this.getUpload()} />
        </Grid>
      </Grid>
    )
  }
}