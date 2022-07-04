import React, { Component } from 'react';

import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import FormDelete from './FormDelete';

export const MODE = {
    add: Symbol(),
    edit: Symbol(),
    delete: Symbol(),
};

class Form extends Component {
    render() {
        const { mode } = this.props;

        // eslint-disable-next-line default-case
        switch (mode) {
            case MODE.add:
                return <FormAdd {...this.props} />;

            case MODE.edit:
                return <FormEdit {...this.props} />;

            case MODE.delete:
                return <FormDelete {...this.props} />;
        }
    }
}

export default Form;
