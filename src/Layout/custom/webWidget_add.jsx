import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CButton } from '@coreui/react';
import { CardHeader, Table } from 'reactstrap';
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

export default function Web_AddWidgets() {
    const classes = useStyles();
    const [Widgetname, setWidgetname]=useState("");
    const [Widgethtmldesign, setWidgethtmldesign]=useState("");
    const [Widgetcss, setWidgetcss]=useState("");


  return (
    <>
    <div className="div-dashbord">
          <div class="container">
            <div class="row">
                <div class="col-md-12">
                <h1 className="h1-dashHeading">
                   Web Add Widgets
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
           <h6 className='h6-CreateWidget'>Create Widget</h6>
          </Paper> */}
           <CAlert color="info">
             Create Widget
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
      {/* <Button className='btn-submit' variant="contained" color="secondary">
         Submit
       </Button> */}
       <div className="d-grid gap-2 col-6 mx-auto">
         <CButton className='btn-submit' color="danger"> Submit</CButton>
       </div>
       <br/><br/>
    </div>
  </>  
  )
}
