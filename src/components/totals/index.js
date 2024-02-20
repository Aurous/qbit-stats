import React from 'react';
import { Grid, Typography } from "@mui/material";

import Item from './item';

import parse from '../../service/parse';

export default class Totals extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            download: 0,
            upload: 0,
            ratio: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { download: propsDowload, upload: propsUpload } = prevProps;
        const { download: stateDownload, upload: stateUpload, ratio } = prevState;

        this.setState({
            download: propsDowload || stateDownload,
            upload: propsUpload || stateUpload,
            ratio: (propsUpload / propsDowload) || ratio
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const downloadChanged = (nextProps.download !== nextState.download);
        const uploadChanged = (nextProps.upload !== nextState.upload);
        return (downloadChanged || uploadChanged);
    }

    getDownload = () => {
        const { download } = this.state;
        return parse(download).convert()
    };

    getUpload = () => {
        const { upload } = this.state;
        return parse(upload).convert()
    };

    getRatio = () =>{
        const { ratio } = this.state;
        return parse(ratio).round();
    }

    render() {
        return (
            <Grid item xs={4}>
                <Typography align="center" variant="h5">Totals</Typography>
                <Grid container direction="row" justify="center" alignItems="stretch" >
                    <Item label="Download" data={this.getDownload() } />
                    <Item label="Upload" data={this.getUpload()} /> 
                    <Item label="Ratio" data={this.getRatio()} />
                </Grid>
            </Grid>
        )
    }
}