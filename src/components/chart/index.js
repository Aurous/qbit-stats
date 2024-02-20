import React from "react";
import { Grid } from "@mui/material";
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';

import Item from '../item';

import parse from '../../service/parse';

export default class Totals extends React.Component {
    constructor(props) {
        super(props);
        this.upload = [...Array(10).map(i => 0)];
        this.download = [...Array(10).map(i => 0)];
    }

    getDownload() {
        if (this.download.length === 10) this.download.shift();
        this.download.push(parse(this.props.download).toMB());
        return this.download;
    }

    getUpload() {
        if (this.upload.length === 10) this.upload.shift();
        this.upload.push(parse(this.props.upload).toMB());
        return this.upload;
    }

    render() {
        const download = this.getDownload();
        const upload = this.getUpload();

        return (
            <Grid item xs={8}>
                <Grid container direction="row" justify="center" alignItems="stretch" >
                    <Grid item xs={7} sx={{ maxHeight: 140 }}>
                        <ChartContainer
                            margin={{ top: 10, bottom: 20, left: 40, right: 20 }}
                            height={160}
                            width={400}
                            series={
                                [
                                    { type: 'line', data: download }, 
                                    { type: 'line', data: upload }
                                ]
                            }
                            xAxis={[{ scaleType: 'point', data: [...Array(10).keys()] }]}
                            disableAxisListener
                        >
                            <LinePlot />
                            <MarkPlot />
                        </ChartContainer>
                    </Grid>

                   <Grid item xs={5} sx={{ maxHeight: 160 }}>
                        <Item label="Down" data={download[download.length-1]} />
                        <Item label="Up" data={upload[upload.length-1]} />
                    </Grid> 
                    {/* <Grid item xs={6} sx={{ maxHeight: 160 }}>
                        <Item label="Up" data={this.getUpload()} />
                    </Grid> */}
                </Grid>
            </Grid>
        )
    }
}