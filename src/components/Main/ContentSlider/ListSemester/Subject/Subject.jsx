import React from 'react';
import {Typography, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import {Link} from 'react-router-dom';
const Subject = ({subName}) => {
    const linkSubName = subName.replace(/\s+/g, '');
    return (
        <div>
            <List
            sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            >
                <ListItemButton component={Link} to={linkSubName}>
                    <ListItemText primary={subName} />
                </ListItemButton>
            </List>
        </div>
    );
};

export default Subject;