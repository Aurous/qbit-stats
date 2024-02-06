import React from "react";    
import { Grid } from '@mui/material';

import Totals from '../../components/totals';
import Chart from '../../components/chart';
import List from '../../components/list';
import Counts from '../../components/counts';

export default class Container extends React.Component {
    render() {
        const { serverState, torrents } = this.props;
        const { 
            alltime_dl,
            alltime_ul,
            dl_info_speed,
            up_info_speed
        } = serverState;
        return (
            <Grid container direction="row" justify="center" alignItems="stretch" > 
                <Grid item xs={4}>
                    <Totals download={alltime_dl} upload={alltime_ul} />
                    <Chart download={dl_info_speed} upload={up_info_speed} />
                    <Counts torrents={torrents} />
                </Grid>
                <Grid item xs={8}>
                    <Grid style={{ height: "100%" }}>
                        <List torrents={torrents} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}