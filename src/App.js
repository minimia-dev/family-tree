import React from 'react';

import Layout from './layouts/Layout';
import MainPage from './pages/MainPage';
import addPerson from './actions/addPerson';
import editPerson from './actions/editPerson';
import deletePerson from './actions/deletePerson';
import toggleNodeOpen from './actions/toggleNodeOpen';
import treeData from './initData';

class App extends React.Component {
    state = {
        treeData,
    };

    addPerson = date => addPerson(this, date);
    editPerson = date => editPerson(this, date);
    deletePerson = date => deletePerson(this, date);
    toggleNodeOpen = data => toggleNodeOpen(this, data);

    render() {
        return (
            <Layout>
                <MainPage
                    storage={this.state}
                    actions={{
                        // prettier-ignore
                        addPerson: this.addPerson,
                        editPerson: this.editPerson,
                        deletePerson: this.deletePerson,
                        toggleNodeOpen: this.toggleNodeOpen,
                    }}
                />
            </Layout>
        );
    }
}

export default App;
