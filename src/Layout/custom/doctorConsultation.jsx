import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ConsultBarChart from './consultation_barchart';
import ConsultAvgcartBarchart from './consultation_avg_cart_barchart'
import Table from 'react-bootstrap/Table';
import Button from '@material-ui/core/Button';
import {CSVLink } from 'react-csv'
import { CAlert } from '@coreui/react';

import { H4,H5,H6,Image, LI, UL } from '../../AbstractElements';
import { Card, CardBody, Col, Media } from 'reactstrap';
import CountUp from 'react-countup'
import { BoxSvg, BoxSvg1, CancelledSvg, CancelledSvg1, DollerSvg, 
  MessageSvg, NewUsersSvg, PendingSvg, PendingSvg1, ProductSvg, TruckSvg, TruckSvg1 } from '../../Component/Widgets/SvgIcons';


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

export default function DoctorConsultation() {
    const classes = useStyles();
    const [getData, setData] = useState([]);
    const headers=[
    {label: 'First Name', Key:'firstname'},
    {label: 'Last Name',  Key:'lastname'},
    {label: 'User Name', Key: 'username '},
]

function DashboardCard (props) {
    return <>       
             <Col sm="6" xl="3" lg="6">
               <Card className="o-hidden">
                 <CardBody>
                   <Media className="static-widget">
                     <Media body><H6 attrH6={{ className: 'font-roboto' }}>{props.title}</H6>
                       <H4 attrH4={{ className: 'mb-0 counter' }}><CountUp end={props.value} /></H4>
                     </Media>
                     {props.icon}
                   </Media>
                   <div className="progress-widget">
                     <div className="progress sm-progress-bar progress-animate">
                       <div className="progress-gradient-secondary" role="progressbar" style={{ width: '75%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span className="animate-circle"></span></div>
                     </div>
                   </div>
                 </CardBody>
               </Card>
             </Col>
           </>
   }


  return (
    <>
    <div className="div-dashbord">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
              <h1 className="h1-dashHeading">
                 Doctor Consultation
               </h1>
            </div>
        </div>
        </div>
     </div>
    <hr/>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <div className='div-cart-left'>
           {/* <h3 className='h3-abandonedCart'></h3> */}
            <CAlert color="info">
              Doctor workbench Dashboard
            </CAlert>
          </div>
        </Grid>
        <Grid item xs={3}>
            <div className='div-dateRang1'>
              <CAlert color="info">
              <span className='span-dateRang'>Date Rang</span> &nbsp;&nbsp;<input type="date" />
            </CAlert>
            </div>
        </Grid>
      </Grid>  
      <br/>
      
      
      
       
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
           
            {/* <Paper id="p-leads" className={classes.paper}>Total leads</Paper> */}
            <DashboardCard title = "Some title" class="progress-gradient-secondary" icon ={<DollerSvg/>}  value= "we44"/>
            

           
            {/* <Paper id="p-Consultations" className={classes.paper}>Todays Consultations</Paper> */}
            <DashboardCard title = "wrret title" class="progress-gradient-secondary" icon ={<DollerSvg/>}  value= "454"/>
      
             
           {/* <Paper id="p-Consulted" className={classes.paper}>Consulted</Paper> */}
           <DashboardCard title = "rg55y56 title" class="progress-gradient-secondary" icon ={<DollerSvg/>}  value= "we44"/>
         

         
           {/* <Paper id="p-Noshow" className={classes.paper}>Noshow</Paper> */}
           <DashboardCard title = "rg55y56 title" class="progress-gradient-secondary" icon ={<DollerSvg/>}  value= "we44"/>
        

          
           {/* <Paper id="p-Yet_to_Consult" className={classes.paper}>Yet to Consult</Paper> */}
           <DashboardCard title = "rg55y56 title" class="progress-gradient-secondary" icon ={<DollerSvg/>}  value= "we44"/>
         

           {/* <Paper id="p-Todays_Cart" className={classes.paper}>Todays Cart</Paper> */}
           <DashboardCard title = "rg55y56 title" class="progress-gradient-secondary" icon ={<DollerSvg/>}  value= "we44"/>
         

         </Grid> 
         </Grid>
       </Grid>  
       <br/><br/>
       <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
               <ConsultBarChart/>
          {/* </Paper> */}
         </Grid>
         <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
             <ConsultAvgcartBarchart/>
          {/* </Paper> */}
         </Grid> 
      </Grid>   
            <CSVLink data={getData} headers={headers} className="csvBtn">
        <Button variant="contained" color="secondary">
       Export to Excel
        </Button>
      </CSVLink>
     <br/>
     <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Place</th>
                        <th scope="col">Pincode	</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
</div>
      <br/><br/>
       
    </div>
 </>   
  )
}
