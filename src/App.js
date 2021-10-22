import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from "@mui/material/Button"
import SaveIcon from '@mui/icons-material/esm/Save'
import DeleteIcon from '@mui/icons-material/esm/Delete'
import  CheckBox from '@mui/icons-material/esm/CheckBox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
 import { Container } from '@mui/material';
 import { Paper } from '@mui/material';
 import { Grid } from '@mui/material';
 import { AppBar } from '@mui/material';
 import { Toolbar } from '@mui/material';
 import { IconButton } from '@mui/material';
import  MenuIcon  from '@mui/icons-material/Menu';
import { styled } from 'styled-components';
import { fontFamily, fontSize } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const theme=createMuiTheme({
  
  palette:{
    primary:{
      main:orange[500]
    }
  }
})
    
function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="LOGO" src="/static/images/avatar/1.jpg" />
      </Stack>
  );
}

function CheckBoxExample(){ 
  const [checked, setChecked] = React.useState(true)
  return(
    
     <FormControlLabel
     control={<CheckBox
     checked={checked}
     onChange={(e)=>setChecked(e.target.checked)}
     inputProps={{
       'aria-label': 'secondary checkbox'
     }}
     />}
    label="testing CheckBox"
    /> 
  )
    }
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
<div className="App">
      <header className="App-header">
        <AppBar >
          <Toolbar>
            <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}>
              <MenuIcon/>
               </IconButton>

  
              
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MUI Themeing
               </Typography>
               <Button color="inherit">Login</Button>
          </Toolbar>
          </AppBar>


        <Typography variant="h3" color="black">
          Welcome to Material UI
          </Typography>
          <Typography variant="h5" color="black">
          Learn how to use Material UI
          </Typography>
          <Grid container direction="row">
            <Grid item xs>
                 <Paper style={{height:75, width:100}}/>
            </Grid>
            <Grid item xs>
                 <Paper style={{height:75, width:100}}/>
            </Grid>
            <Grid item xs>
                 <Paper style={{height:75, width:100}}/>
            </Grid>
            </Grid>
      <TextField variant = "outlined"
     
        color="secondary"
        type="text"
        label="Name"
        placeholder="Enter your name"
        />
        
        <TextField variant = "outlined"
        color="secondary"
        type="email"
        label="Email"
        placeholder="testing@test.com"
        />
        <TextField variant = "filled"
        color="secondary"
        type="password"
        label="Password"
        placeholder="Enter your password"
        />
        <TextField variant = "filled"
        color="secondary"
        type="time"
        label="The Time"
        />


        <CheckBoxExample/>
        <ButtonGroup>
        <Button startIcon={<SaveIcon/>} size="large" variant ="contained" color="primary">
          Save
        </Button>
        <Button startIcon={<DeleteIcon/>} size="large" variant ="contained" color="secondary">
          Discard
        </Button>
      </ButtonGroup>
      
        <form action="">
          <input type="text"/>
          <button>create</button>
          <Button>Done</Button>
        </form>
        
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
