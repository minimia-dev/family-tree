import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const getPaddingLeft = (level, isEnd) => {
    let paddingLeft = level * 20;
    if (isEnd) paddingLeft += 25;
    return paddingLeft;
};

const styles = makeStyles(theme => ({
    treeNodeWrapper: ({ level, isEnd }) => ({
        'padding-left': `${getPaddingLeft(level, isEnd)}px`,
    }),
}));

const TreeNodeWrapper = props => {
    const { children, level, isEnd } = props;
    const classes = styles({ level, isEnd });

    return <div className={classes.treeNodeWrapper}>{children}</div>;
};

export default TreeNodeWrapper;
