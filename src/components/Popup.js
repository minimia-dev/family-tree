import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import styles from './Popup.styles';

export const MODE = {
    add: Symbol(),
    edit: Symbol(),
    delete: Symbol(),
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class OptionDialog extends React.Component {
    state = {
        open: false,
    };

    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    /**
     * @public
     */
    open() {
        this.setState({
            open: true,
        });
    }

    /**
     * @public
     */
    close() {
        this.setState({ open: false });
    }

    render() {
        const { classes, children } = this.props;
        const { open } = this.state;

        return (
            <Dialog
                open={open}
                onClose={this.close}
                TransitionComponent={Transition}
            >
                <div className={classes.wrapper}>{children}</div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(OptionDialog);
