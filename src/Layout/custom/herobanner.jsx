import React,{useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {makeStyles} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme)=>({
  mainTable:{
    padding:'35px 35px 35px 35px',
    backgroundColor: '#efeaea',
  },
  root:{
    padding:theme.spacing(3),
    textAlign:'center',
  },
  mainPaper:{
    color:'#ff8520',
    backgroundColor:'#63596396',
    height:'550px',
  },
  paperheading:{
    backgroundColor:'#7d7979',
    height:'10px',
    padding:'20px'
  },
  div1:{
    padding:'0px 0px 15px'
  },
  div2:{
    padding:'10px 30px',
    margin:'0px'
  },
  uploadbtn1:{
   margin:'0px 30px 0px 11px',
  },
  
  uploadbtn2:{
    margin:'6px 46px 0px 0px',
  },
  
  imgAvater:{
    margin: '5px 55px',
    padding: '4px 4px 4px 4px',
  },
  
  div3:{
    position:'relative',
    right:'10%',
    color:'black',
    margin:'30px 10px',
  },
  div4:{
    padding:'35px 20px'
  },
  div5:{
    margin:'40px 12px 0px 14px',
    position:'absolute',
    color:'black',
  },
  input:{
    display:'none'
  },
  topbrand:{
   position:'relative',
   top:'15px',
   right:'38px',
   color:'black',
  },
  showMes:{
   margin:'15px 190px 0px 0px',
  },
  valImg:{
    position: 'relative',
    right: '5%',
    top: '0%',
  },
  outletaddress:{
  margin: '5px 0px 5px 10px',
  width: '94%',
  },
  valImgbn:{
    position: 'relative',
    right: '2%',
    top: '0%',
  },
  valImgds:{
    position: 'relative',
    right: '2%',
    top: '8%',
  },
  valImgicon:{
    position: 'relative',
    right: '56%',
    top: '35%',
  },
  valImgAd:{
    position: 'relative',
    right: '9%',
    top: '5%',
  },
  valImgtop:{
  position: 'relative',
  right: '1%',
  top: '0%',
  },
  radio1:{
  margin:'10px 10px 10px 10px'
  },

  // Add New User form css start
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // end the css form 

  
  formControl: {
  //margin: theme.spacing(1),
  minWidth:180,
  },
  }));

export default function HeroBanner() {
  const classes = useStyles();
  const [getSId, setSId] = useState("");
  const [Banner, setBanner]=useState({icon:'',file:''});
  const [Heading_subHeading, setHeading_subHeading]=useState("");
  const [Type, setType]=useState("");
  const [ButtonText, setButtonText] =useState("");
  const [PageHeading, setPageHeading] =useState("");
  const [BannerTimer, setBannerTimer] =useState("");
  const [SortOrder, setSortOrder] =useState("");
  const [getMessage, setMessage] = useState("")



  // handle  

  const handleIcon=(event)=>{
    setBanner({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})
  } 

  const handleSubmit = async()=> {
  };

    return <>
      <div className="div-dashbord">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
              <h1 className="h1-dashHeading">
                 HeroBanner
               </h1>
            </div>
        </div>
        </div>
     </div>
     <hr/>
     <br/><br/>
        {/* ------------------- form start ------------------------ */}

        <div className={classes.div2}>
                                  <Grid container spacing={2}>

                                  <Grid item xs={6} sm={6} md={6} lg={6}>
                                      <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={(event) => handleIcon(event)}
                                      />
                                      <label htmlFor="contained-button-file">
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          component="span"
                                          className={classes.uploadbtn1}
                                          startIcon={<CloudUploadIcon />}
                                        >
                                          Upload Icon
                                        </Button>
                                      </label>
                                    </Grid>
                                    
                                    <Grid item xs={6} sm={6} md={6} lg={6} className={classes.container}>
                                      <Avatar
                                        alt="Remy Sharp"
                                        variant="rounded"
                                        className={classes.updateIcon}
                                        style={{ width: 70, height: 50 }}
                                        src={Banner.icon}
                                      />
                                    </Grid>

                                  
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                      <TextField
                                        fullWidth
                                        label="Heading sub Heading"
                                        className={classes.text1}
                                        value={Heading_subHeading}
                                        onChange={(event) => {
                                          setHeading_subHeading(event.target.value);
                                        }}
                                      />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                
                                      <TextField
                                       fullWidth
                                        label="Type"
                                        className={classes.text2}
                                        value={Type}
                                        onChange={(event) => {
                                          setType(event.target.value);
                                        }}
                                      />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                      <TextField
                                        fullWidth
                                        label="ButtonText"
                                        className={classes.text2}
                                        value={ButtonText}
                                        onChange={(event) => {
                                          setButtonText(event.target.value);
                                        }}
                                      />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                      <TextField
                                        fullWidth
                                        label="PageHeading"
                                        className={classes.text2}
                                        value={ButtonText}
                                        onChange={(event) => {
                                          setPageHeading(event.target.value);
                                        }}
                                      />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                      <TextField
                                        fullWidth
                                        label="BannerTimer"
                                        className={classes.text2}
                                        value={ButtonText}
                                        onChange={(event) => {
                                          setBannerTimer(event.target.value);
                                        }}
                                      />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                      <TextField
                                        fullWidth
                                        label="SortOrder"
                                        className={classes.text2}
                                        value={SortOrder}
                                        onChange={(event) => {
                                          setSortOrder(event.target.value);
                                        }}
                                      />
                                    </Grid>


                                  </Grid>
                                  <div className={classes.div3}>
                                    <Grid container spacing={2}>
                                    
                                      <Grid item xs={6} sm={6} md={6} lg={6}></Grid>
                                      <Grid item xs={12} className={classes.container}>
                                      <span className='edit-btn'>
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSubmit}>
                                            Edit Above Data
                                          </Button>
                                        </span>  
                                      </Grid>
                                      <Grid item xs={6}>
                                      {/* <span className='reset-btn'>
                                        <Button variant="contained" color="primary" onClick={(e)=>ClearData()}>Reset</Button></span> */}
                                      </Grid>
                                      <Grid item xs={12}>
                                        <p className='p-message'><b>Message:</b>&nbsp;&nbsp;{getMessage}</p>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </div>
  
       
         {/* ------------------- form end ------------------------ */}
    </>
}