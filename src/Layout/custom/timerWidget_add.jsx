import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CButton } from '@coreui/react';
import { CAlert } from '@coreui/react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function Timer_AddWidgets() {
    const classes = useStyles();
    const [Widgetname, setWidgetname]=useState("");
    const [Widgethtmldesign, setWidgethtmldesign]=useState("");
    const [Widgetcss, setWidgetcss]=useState("");

    const [Startdate, setStartdate]=useState("");
    const [Enddate, setEnddate]=useState("");
    const [Position, setPosition]=useState("");
    const [Alingment, setAlingment]=useState("");
    const [Backgroundcolor, setBackgroundcolor]=useState("");
    const [Textcolor, setTextcolor]=useState("");

  return (
    <>
    <div className="div-dashbord">
          <div class="container">
            <div class="row">
                <div class="col-md-12">
                <h1 className="h1-dashHeading">
                    Timer Widget
                </h1>
                </div>
             </div>
            </div>
           <hr/> 
        </div>
    <div className="div-webAdd">
       <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>
          <h6 className='h6-TimerWidget'>Create Timer Widget</h6>
          </Paper> */}
            <CAlert color="info">
               Create Timer Widget
            </CAlert>
        </Grid>
      </Grid> 
      <br/><br/>
    
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <span className='span-widgetName'>Widget name</span><br/><br/>
          <div>
            <TextField className='web-add' fullWidth  variant="outlined" placeholder='Enter your widget name' />
          </div> 
        </Grid>
      </Grid> 
      <br/><br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>  
          <span className='span-htmldesign'>Widget html design</span><br/><br/>
          <div className='div-editor'>
            <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
            />
          </div>  
        </Grid>
      </Grid> 
      <br/><br/>
       <Grid container spacing={3}>
        <Grid item xs={12}>   
          <span className='span-css'>Widget css</span><br/><br/>
          <div>
          <Editor
            className='div-editor'
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
         </div> 
        </Grid>
      </Grid>   
      <br/><br/>
      <Grid item xs={12}>
          <span className='span-Startdate'>Start date</span><br/><br/>
          <div>
            <TextField className='web-add' fullWidth  variant="outlined" placeholder='Enter your start date' />
          </div> 
      </Grid>
      <br/><br/>

      <Grid item xs={12}>
          <span className='span-Enddate'>End date</span><br/><br/>
          <div>
            <TextField className='web-add' fullWidth  variant="outlined" placeholder='Enter your end date' />
          </div> 
      </Grid>

      <br/><br/>

      <Grid item xs={12}>
          <span className='span-Position'>Position (top / bottom)</span><br/><br/>
          <div>
            <TextField className='web-add' fullWidth  variant="outlined" placeholder='Enter your position' />
          </div> 
      </Grid>

    <br/><br/>

      <Grid item xs={12}>
          <span className='span-Alingment'>Alingment (left/center/right)</span><br/><br/>
          <div>
            <TextField className='web-add' fullWidth  variant="outlined" placeholder='Enter your alingment' />
          </div> 
      </Grid>

      <br/><br/>

      <Grid item xs={12}>
          <span className='span-Backgroundcolor'>Background color</span><br/><br/>
          <div>
            <TextField className='web-add' fullWidth  variant="outlined" placeholder='Enter your background color' />
          </div> 
      </Grid>

    <br/><br/>

    <Grid item xs={12}>
        <span className='span-Textcolor'>Text color</span><br/><br/>
        <div>
          <TextField className='web-add' fullWidth  variant="outlined" placeholder='Enter your text color' />
        </div> 
    </Grid>

    <br/><br/>

       <div className="d-grid gap-2 col-6 mx-auto">
         <CButton className='btn-submit' color="danger"> Submit</CButton>
       </div>

       <br/><br/>
    </div>
  </>  
  )
}
