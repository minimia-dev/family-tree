import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconCheck from '@material-ui/icons/Check';

import styles from './Form.styles';

export const MODE = {
    add: Symbol(),
    edit: Symbol(),
    delete: Symbol(),
};

class FormAdd extends Component {
    currData = {
        name: '',
    };

    handleSaveClick = () => {
        const { name } = this.currData;

        this.props.onAdd({ name, parentNodeId: this.props.nodeId });
    };

    handleChange = e => {
        let name = e.target.value;
        this.currData.name = name;
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
                <Typography variant="h2" className={classes.title}>
                    Add child
                </Typography>
                <div>
                    <TextField
                        className={classes.inputName}
                        label={`Name`}
                        multiline
                        defaultValue={''}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        color={'primary'}
                        onClick={this.handleSaveClick}
                    >
                        <IconCheck />
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(FormAdd);
