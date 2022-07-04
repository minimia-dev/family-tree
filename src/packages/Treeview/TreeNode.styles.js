const styles = theme => ({
    nodeIcon: {
        'font-size': '12px',
        'margin-right': '10px',
    },

    treeNode: {
        display: 'inline-flex',
        'flex-direction': 'row',
        'align-items': 'center',
        padding: '5px 8px',

        '&:hover': {
            background: 'lightgray',
            cursor: 'pointer',
        },
    },

    controlsWrapper: {
        marginLeft: '15px',
    },
});

export default styles;
