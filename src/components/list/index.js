import React from "react";
import { Grid, Typography } from "@mui/material";

import Item from './item';

import { format, parse } from '../../service';

export default class List extends React.Component {
    
    getData() {
        const { torrents } = this.props;
        if (typeof torrents !== 'object') return [];
        return format
            .objectToMap(torrents)
            .filter(({ dlspeed, upspeed }) => !!dlspeed || !!upspeed)
            .map((torrent) => ({ up: parse(torrent.upspeed).live(), down: parse(torrent.dlspeed).live(), ...torrent }))
            .sort((a, b) => (b.upspeed || 0) - (a.upspeed || 0))
            .sort((a, b) => (b.dlspeed || 0) - (a.dlspeed || 0))
            .slice(0, 13);
    }
    
    render() {
        return (
            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="stretch" >
                    <Grid item xs={6}>
                        <Typography variant="h6" alight="left">
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" align="right">
                            Down
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" align="right">
                            Up
                        </Typography>
                    </Grid>
                </Grid>
                {this.getData().map(({ id, name, up, down }) => (<Item key={id} name={name} up={up} down={down} />))}
            </Grid >
        )
    }
}