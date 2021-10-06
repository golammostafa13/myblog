import React from 'react';
import {Typography, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';

const Subject = ({subName}) => {
    const handleClick = () => {
        console.log('clicked');
    }
    return (
        <div>
            <List
            sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick= {handleClick}>
                    <ListItemText primary={subName} />
                </ListItemButton>
            </List>
        </div>
    );
};

export default Subject;