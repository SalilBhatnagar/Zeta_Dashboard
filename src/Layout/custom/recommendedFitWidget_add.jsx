import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CAlert } from '@coreui/react';
import { CButton } from '@coreui/react';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  '& > *': {
    margin: theme.spacing(1),
    width: '25ch',
  },
}));


export default function RecommededWidgets() {
    const classes = useStyles();

    const [value, setValue] = useState('Production');
    const handleChange = (event) => {
    setValue(event.target.value);
  };
    

  return (
    <>
    <div className="div-dashbord">
     <div class="container">
        <div class="row">
            <div class="col-md-12">
              <h1 className="h1-dashHeading">
                  Recommeded Widgets
               </h1>
            </div>
        </div>
        </div>
     </div>
     <hr/>
    <div className="div-main-recommeded">
       <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>
              <h6 className='h6-recommeded'>Add Product ID to create widget</h6>
          </Paper> */}
           <CAlert color="info">
             Add Product ID to create widget
            </CAlert>
        </Grid>
      </Grid>   

      <Grid container spacing={3}>
        <Grid item xs={12}>
          
           <div className='div-server'>
             server
           </div>
           <br/>
           <div className='div-radio-btn'>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="Server" name="Server" value={value} onChange={handleChange}>
                        <FormControlLabel value="Production" control={<Radio />} label="Production" />
                        <FormControlLabel value="Staging" control={<Radio />} label="Staging" />
                    </RadioGroup>
                </FormControl>
            </div>
            <br/>

            <div className='div-ProductID'>
             Product ID
            </div>
            <TextField fullWidth placeholder='Enter your product id' variant="outlined"
            style={{width:'85%', marginRight:'8%',marginTop:'2%' }}/>
            <br/><br/><br/>
            {/* <div className='btn-submit'>
            <Button fullWidth variant="contained" color="secondary">
                 Submit
             </Button>
            </div> */}
            <div className="d-grid gap-2 col-6 mx-auto">
                <CButton className='btn-submit' color="danger">Submit</CButton>
              </div>
        </Grid>
      </Grid>         
    </div>
    </>
  )
}
