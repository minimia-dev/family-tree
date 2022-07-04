import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconCheck from '@material-ui/icons/Check';

import styles from './Form.styles';

export const MODE = {
    add: Symbol(),
    edit: Symbol(),
    delete: Symbol(),
};

class FormDelete extends Component {
    handleSaveClick = () => {
        const { nodeId } = this.props;

        this.props.onDelete({ nodeId });
    };

    render() {
        const { classes, data, nodeId } = this.props;
        const { name } = data[nodeId] || {};

        return (
            <div className={classes.wrapper}>
                <Typography variant="h2" className={classes.title}>
                    Remove <b>{name}</b> ?
                </Typography>

                <div className={classes.button}>
                    <Button
                        variant="contained"
                        color={'secondary'}
                        onClick={this.handleSaveClick}
                    >
                        <IconCheck />
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(FormDelete);
