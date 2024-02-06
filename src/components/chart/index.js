import React from "react";
import { Grid } from "@mui/material";

import Item from '../item';

import parse from '../../service/parse';

export default class Totals extends React.Component {
    getDownload() {
        return parse(this.props.download).live();
    }

    getUpload() {
        return parse(this.props.upload).live();
    }

    render() {
        return (
            <Grid item xs={12} sx={{ maxHeight: 160, minHeight: 160 }}>
                <Grid container direction="row" justify="center" alignItems="stretch" > 
                    <Grid item xs={6} sx={{ maxHeight: 160 }}>
                        <Item label="Down" data={this.getDownload()} />
                    </Grid>
                    <Grid item xs={6} sx={{ maxHeight: 160 }}>
                        <Item label="Up" data={this.getUpload()} />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}