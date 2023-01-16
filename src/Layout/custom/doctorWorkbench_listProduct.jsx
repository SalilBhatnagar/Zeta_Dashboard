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
import { CButton } from '@coreui/react';
import { CAlert } from '@coreui/react';

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

export default function DoctorWorkbenchListDoctor() {
  const classes = useStyles();

  const [ProductID, setProductID] = useState("");
    const [ProductName, setProductName]=useState("");
    const [Productprice, setProductprice]=useState("");
    const [Retailprice, setRetailprice]=useState("");
    const [TaxID, setTaxID] =useState("");
    const [ProductSKU, setProductSKU] =useState("");
    const [How_to_use, setHow_to_use] =useState("");
    const [SalePrice, setSalePrice] =useState("");
    const [Status, setStatus] = useState("");
    const [getMessage, setMessage] = useState("")


  // handle  

  const handleEditChangeData=(e)=>{
    setStatus(e.target.value)
  }

  const handleSubmit = async()=> {
  };

    return <>
      <div className="div-dashbord">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
              <h1 className="h1-dashHeading">
                 Doctor Workbench List Product
               </h1>
            </div>
        </div>
        </div>
     </div>
     <hr/>
     <br/><br/>

          {/* ------------------- Edit form start ------------------------ */}
                             
                                       <Grid container spacing={3}>
                                    
                                    <Grid item xs={6}>
                                         <span>Product ID</span>
                                          <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Product ID"
                                            type="text"
                                            placeholder='Enter your Product ID'
                                          />
                                      </Grid>
  
                                      <Grid item xs={6}>
                                            <span>Product Name</span>
                                            <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Product Name"
                                            autoFocus
                                            placeholder='Enter your Product Name'
                                          />
                                       
                                      </Grid>
                                    
                                   </Grid>      
  
                                   <Grid container spacing={3}>
                                      <Grid item xs={6}>
                                           <span>Product price</span>
                                            <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Product price"
                                            autoFocus
                                            placeholder='Enter your Product price'
                                          />
                                       
                                      </Grid>
                                      <Grid item xs={6}>
                                           <span>Retail price</span>
                                            <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Retail price"
                                            autoFocus
                                            placeholder='Enter your Retail price'
                                          />
                                       
                                      </Grid>
                                   </Grid>      
  
                                   <Grid container spacing={3}>
                                      <Grid item xs={6}>
                                          <span>Tax ID</span>
                                            <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Tax ID"
                                            autoFocus
                                            placeholder='Enter your Tax ID'
                                          />
                                       
                                      </Grid>
                                      <Grid item xs={6}>
                                         <span>CTA link</span>
                                          <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="CTA link"
                                            placeholder='Enter you CTA link'
                                            type="text"
                                          />
                                      </Grid>
                                   </Grid>      
  
                                   <Grid container spacing={3}>
                                      <Grid item xs={6}>
                                           <span>Product SKU</span>
                                            <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Product SKU"
                                            placeholder='Enter your Product SKU'
                                            autoFocus
                                          />
                                       
                                      </Grid>
                                      <Grid item xs={6}>
                                         <span>Sale Price</span>
                                          <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="Sale Price"
                                            type="text"
                                            autoFocus
                                            placeholder='Enter you Sort order'
                                          />
                                      </Grid>
                                   </Grid>      
                                    <br/>
                                   <Grid container spacing={3}>
                                     <span> How to use</span>
                                      <Grid item xs={12}>
                                      <textarea rows="10" cols="80" name="blog">
                                      How to use
                                      </textarea>             
                                      </Grid>
                                   </Grid>      
                                    <br/><br/>  
                                    <Grid container spacing={3}>
                                      &nbsp;&nbsp; &nbsp;&nbsp;<span>Status</span>
                                      <Grid item xs={12}>
                                            <Select
                                              labelId="demo-simple-select-outlined-label"
                                              id="demo-simple-select-outlined"
                                              value={Status}
                                              onChange={handleEditChangeData}  
                                              label="Age"
                                              className="btn-changedate"
                                            >
                                              <MenuItem value="">
                                                <em>None</em>
                                              </MenuItem>
                                              <MenuItem value="Active">Active</MenuItem>
                                              <MenuItem value="Disable">Disable</MenuItem>
                                              
                                            </Select>
  
                                      </Grid>
                                   </Grid>      
                                   
                                    <FormControlLabel
                                      control={<Checkbox value="remember" color="primary" />}
                                      label="Remember me"
                                    />
  
                                    <br/>
                         
                                    {/* <Button onClick={handleSubmit} className="btnSumit" type="submit" variant="contained" color="secondary">
                                     Secondary
                                    </Button> */}
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <CButton className='btn-submit' color="danger"> Submit</CButton>
                                    </div>
                                    <Grid container>
                                    </Grid>
                              
                                  {/* ------------------- form end ------------------------ */}
                                  <br/><br/>
    </>
}