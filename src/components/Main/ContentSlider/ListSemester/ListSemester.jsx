import * as React from 'react';
import {Typography, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse} from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Subject from './Subject/Subject';

export default function ListSemester() {
  const subjects = ['Compiler Design', 'Artificial Intelligence', 'E-commerce & Marketing', 'Computer Graphics'];
  // const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const handleClick = (val)=> {

    switch (val) {
      case 1:
        setOpen1(!open1);
        break;
      case 2:
        setOpen2(!open2);
        break;
      case 3:
        setOpen3(!open3);
        break;
      case 4:
        setOpen4(!open4);
        break;
      case 5:
        setOpen5(!open5);
        break;
      case 6:
        setOpen6(!open6);
        break;
      case 7:
        setOpen7(!open7);
        break;
      case 8:
        setOpen8(!open8);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            1st Year : 1st Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(1)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="1st Semester" />
            { open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4}}>
                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
              </ListItemButton>
            </List>
          </Collapse>
      </List>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            1st Year : 2nd Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(2)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="2nd Semester" />
            { open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
            
                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
                
              </ListItemButton>
            </List>
          </Collapse>
      </List>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            2nd Year : 1st Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(3)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="3rd Semester" />
            { open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>

                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
                
              </ListItemButton>
            </List>
          </Collapse>
      </List>  
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            2nd Year : 2nd Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(4)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="4th Semester" />
            { open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
            
                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
                
              </ListItemButton>
            </List>
          </Collapse>
      </List>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            3rd Year : 1st Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(5)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="5th Semester" />
            { open5 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
            
                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
                
              </ListItemButton>
            </List>
          </Collapse>
      </List>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            3rd Year : 2nd Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(6)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="6th Semester" />
            { open6 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
            
                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
                
              </ListItemButton>
            </List>
          </Collapse>
      </List>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            4th Year : 1st Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(7)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="7th Semester" />
            { open7 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>

                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
                
              </ListItemButton>
            </List>
          </Collapse>
      </List>
      <List
        sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color="primary" component="div" id="nested-list-subheader">
            4th Year : 2nd Sem
          </ListSubheader>
        }
        >
          <ListItemButton onClick= {() => handleClick(8)}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="8th Semester" />
            { open8 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open8} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
            
                <div>
                    {subjects.map(sub => <Subject key={sub} subName={sub} />)}
                </div>
                
              </ListItemButton>
            </List>
          </Collapse>
      </List>
    </>
  );
}
