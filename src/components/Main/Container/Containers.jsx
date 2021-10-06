import React from 'react';
import useStyles from './style';

const Containers = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            container
        </div>
    );
};

export default Containers;