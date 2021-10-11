import React from 'react'
import './App.css';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from "@mui/material/Button"
import SaveIcon from '@mui/icons-material/esm/Save'
import DeleteIcon from '@mui/icons-material/esm/Delete'
import  CheckBox from '@mui/icons-material/esm/CheckBox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'
const useStyles=makeStyles({
  root:{
    background: 'linear-gradient (45deg, #333, #999 )',
    border:0,
    borderRadius:15,
    color:'white',
    padding :'0 30px'
  }
  
})
function ButtonStyled(){
  const classes=useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>

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
    <div className="App">
      <header className="App-header">
        <ButtonStyled/>
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
        
        
      </header>
    </div>
  );
}

export default App;
