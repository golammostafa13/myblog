import * as React from 'react';
import {Typography, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function ListSemester() {
  const [open, setOpen] = React.useState(false);
  const subjects = [1, 2, 3, 4, ,5, 6];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8]
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
    
    {
        semesters.map(sem => (
            <List
      sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="1st Semester" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
        
            <ul>
                {subjects.map(sub => <ListItemText primary={sub} />)}
            </ul>
            
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        ))
    }
    
    </>
  );
}
