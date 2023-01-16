import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DatePicker from "react-datepicker";
import { CAlert } from '@coreui/react';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css

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


export default function BulkDownload() {
    const [startDate, setStartDate] = useState(new Date());
    const classes = useStyles();
  return (
     <>
        <div className="div-dashbord">
          <div class="container">
            <div class="row">
                <div class="col-md-12">
                <h1 className="h1-dashHeading">
                    Bulk Download
                </h1>
                </div>
             </div>
            </div>
           <hr/> 
        </div>
        <div className="div-main-bulkDownload">
          <Grid container spacing={3}>
            <Grid item xs={12}>
            {/* <Paper className={classes.paper}>
                <h6 className='h6-dateRang'>Date Range</h6>
            </Paper> */}
              <CAlert color="info">
                 Date Range
              </CAlert>
            </Grid>
          </Grid> 
          <br/><br/>
           
          <Grid container spacing={3}>
            <Grid item xs={12}>
           
                <Grid item xs={6}>
                    {/* <Paper className={classes.paper}> */}
                      {/* <input type="date" name="date" /> */}
                      <DatePicker selected={startDate} />
                    {/* </Paper> */}
                </Grid>
           
            </Grid>
          </Grid> 
          <br/><br/>
          <Grid container spacing={3}>
           
                <Grid item xs={6}>
                    <Paper className='div-pulldata'>
                       <div className='div-PullData-Hover'>
                        <a > Pull Data</a> 
                        </div>
                     </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className='div-downexcel'>
                        <div className='div-DowExc-Hover'>
                          <a >Download Excel</a> 
                        </div>
                     </Paper>
                </Grid>
        
          </Grid> 

    </div>
   </> 
  )
}
