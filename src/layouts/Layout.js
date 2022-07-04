import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from './Layout.styles';

class Layout extends React.Component {
    render() {
        const { classes, children } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Layout);
