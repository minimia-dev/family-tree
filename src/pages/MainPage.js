import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Popup from '../components/Popup';
import Form, { MODE } from '../components/Form';
import Tree from '../packages/Treeview/Tree';

import styles from './MainPage.styles';

class MainPage extends Component {
    state = {
        nodeId: 0,
        mode: MODE.add,
    };

    optionsRef = React.createRef();

    handleOpenClick = mode => nodeId => {
        this.setState({ nodeId, mode });

        this.optionsRef.current.open();
    };

    handleFormSaved = method => (...data) => {
        this.optionsRef.current.close();
        method(...data);
    };

    render() {
        const {
            classes,
            storage: { treeData },
            actions: { addPerson, editPerson, deletePerson, toggleNodeOpen },
        } = this.props;
        const { nodeId, mode } = this.state;

        return (
            <div>
                <Typography variant="h2" className={classes.title}>
                    Family tree
                </Typography>

                <div>
                    <Tree
                        nodes={treeData}
                        onToggle={toggleNodeOpen}
                        onAdd={this.handleOpenClick(MODE.add)}
                        onEdit={this.handleOpenClick(MODE.edit)}
                        onDelete={this.handleOpenClick(MODE.delete)}
                    />
                </div>

                <Popup ref={this.optionsRef}>
                    <Form
                        nodeId={nodeId}
                        data={treeData}
                        mode={mode}
                        onAdd={this.handleFormSaved(addPerson)}
                        onEdit={this.handleFormSaved(editPerson)}
                        onDelete={this.handleFormSaved(deletePerson)}
                    />
                </Popup>
            </div>
        );
    }
}

export default withStyles(styles)(MainPage);
