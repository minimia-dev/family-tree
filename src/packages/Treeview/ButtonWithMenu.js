import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconArrowDropDown from '@material-ui/icons/ArrowDropDown';
import IconAdd from '@material-ui/icons/PersonAddSharp';
import IconEdit from '@material-ui/icons/Edit';
import IconDelete from '@material-ui/icons/DeleteForever';

import styles from './ButtonWithMenu.styles';

class ButtonWithMenu extends Component {
    constructor(...props) {
        super(...props);

        this.anchorRef = React.createRef();

        this.state = { open: false };
    }

    getControlList = ({ nodeId, noDelete, onAdd, onEdit, onDelete }) => {
        return [
            {
                title: 'Add',
                Icon: IconAdd,
                onClick: () => {
                    onAdd(nodeId);
                },
            },
            {
                title: 'Edit',
                Icon: IconEdit,
                onClick: () => {
                    onEdit(nodeId);
                },
            },
        ].concat(
            noDelete
                ? []
                : {
                      title: 'Delete',
                      Icon: IconDelete,
                      onClick: () => {
                          onDelete(nodeId);
                      },
                  }
        );
    };

    setOpen(open) {
        this.setState({ open });
    }

    handleMenuItemClick = onClick => event => {
        event.stopPropagation();
        onClick();
        this.setOpen(false);
    };

    handleToggle = event => {
        event.stopPropagation();
        this.setOpen(!this.state.open);
    };

    handleClose = event => {
        let anchorRef = this.anchorRef;

        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        this.setOpen(false);
    };
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        const {
            anchorRef,
            handleToggle,
            handleClose,
            handleMenuItemClick,
        } = this;
        return (
            <div>
                <Button
                    ref={anchorRef}
                    className={classes.openBtn}
                    variant="outlined"
                    size="small"
                    color="default"
                    title="Actions"
                    onClick={handleToggle}
                >
                    <IconArrowDropDown />
                </Button>
                <Popper
                    className={classes.popup}
                    open={open}
                    anchorEl={anchorRef.current}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList>
                                        {this.getControlList(this.props).map(
                                            (
                                                { title, Icon, onClick },
                                                index
                                            ) => (
                                                <MenuItem
                                                    key={index}
                                                    onClick={handleMenuItemClick(
                                                        onClick
                                                    )}
                                                >
                                                    <Icon />
                                                    &nbsp;&nbsp;{title}
                                                </MenuItem>
                                            )
                                        )}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        );
    }
}

export default withStyles(styles)(ButtonWithMenu);
